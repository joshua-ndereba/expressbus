<?php
header('Content-Type: application/json');
require_once 'db.php';

class MpesaPayment {
    private $consumerKey = "7fXZEA592gueQVRsYwmlNAULr9XuKksYuakml8mJDgI7mcJn";
    private $consumerSecret = "MqAYgeOTO2hYndkfi47zXvzMEHaiPLaXKsdp7Lmw1cxs4MaRGNXauPaFmUScwXt7";
    private $baseURL = "https://sandbox.safaricom.co.ke";
    
    public function initiatePayment($phone, $amount, $bookingId) {
        try {
            // Validate phone number format
            if (!preg_match('/^254[0-9]{9}$/', $phone)) {
                throw new Exception("Invalid phone number format. Use 254XXXXXXXXX");
            }

            // Validate amount
            if (!is_numeric($amount) || $amount <= 0) {
                throw new Exception("Invalid amount");
            }

            // Generate access token
            $credentials = base64_encode($this->consumerKey . ':' . $this->consumerSecret);
            $ch = curl_init($this->baseURL . '/oauth/v1/generate?grant_type=client_credentials');
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Basic ' . $credentials]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $response = json_decode(curl_exec($ch), true);
            
            if (!isset($response['access_token'])) {
                throw new Exception("Failed to get access token");
            }
            
            $token = $response['access_token'];

            // Initiate STK Push
            $timestamp = date('YmdHis');
            $password = base64_encode('174379' . 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919' . $timestamp);
            
            $data = [
                'BusinessShortCode' => '174379',
                'Password' => $password,
                'Timestamp' => $timestamp,
                'TransactionType' => 'CustomerPayBillOnline',
                'Amount' => $amount,
                'PartyA' => $phone,
                'PartyB' => '174379',
                'PhoneNumber' => $phone,
                'CallBackURL' => 'https://expressbus.com/bus/mpesa_callback.php',
                'AccountReference' => $bookingId,
                'TransactionDesc' => 'Bus Ticket Payment'
            ];

            $ch = curl_init($this->baseURL . '/mpesa/stkpush/v1/processrequest');
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: Bearer ' . $token,
                'Content-Type: application/json'
            ]);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $response = json_decode(curl_exec($ch), true);
            
            // Log the transaction attempt
            $stmt = $pdo->prepare("INSERT INTO payment_logs (booking_id, phone, amount, response) VALUES (?, ?, ?, ?)");
            $stmt->execute([$bookingId, $phone, $amount, json_encode($response)]);
            
            return ['success' => true, 'data' => $response];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['phone']) || !isset($data['amount']) || !isset($data['booking_id'])) {
            throw new Exception("Missing required parameters");
        }
        
        $mpesa = new MpesaPayment();
        $result = $mpesa->initiatePayment($data['phone'], $data['amount'], $data['booking_id']);
        
        echo json_encode($result);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}