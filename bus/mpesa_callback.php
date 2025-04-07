<?php
require_once 'db.php';
require_once 'send_email.php';

// Get the response from M-Pesa
$response = file_get_contents('php://input');
$callbackData = json_decode($response, true);

if (isset($callbackData['Body']['stkCallback'])) {
    $result = $callbackData['Body']['stkCallback']['ResultCode'];
    $bookingId = $callbackData['Body']['stkCallback']['CallbackMetadata']['Item'][1]['Value'];
    
    if ($result === 0) {
        // Payment successful
        // Update booking status
        $stmt = $pdo->prepare("UPDATE bookings SET status = 'paid' WHERE id = ?");
        $stmt->execute([$bookingId]);
        
        // Send email with ticket
        sendTicketEmail($bookingId);
    } else {
        // Payment failed
        $stmt = $pdo->prepare("UPDATE bookings SET status = 'failed' WHERE id = ?");
        $stmt->execute([$bookingId]);
    }
}

// Return response to M-Pesa
header('Content-Type: application/json');
echo json_encode(['ResponseCode' => '00000000', 'ResponseDesc' => 'success']);
?>