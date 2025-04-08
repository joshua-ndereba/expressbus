<?php
header('Content-Type: application/json');
require_once 'db.php';

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $required_fields = ['name', 'email', 'subject', 'message'];
        $data = [];
        
        // Validate all required fields
        foreach ($required_fields as $field) {
            if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
                throw new Exception("$field is required");
            }
            $data[$field] = trim($_POST[$field]);
        }

        // Validate email
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format');
        }

        // Store the contact form submission
        $stmt = $pdo->prepare("INSERT INTO contact_messages (name, email, subject, message) 
                              VALUES (:name, :email, :subject, :message)");
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':subject' => $data['subject'],
            ':message' => $data['message']
        ]);

        // Send email notification to admin
        $to = "joshneid07@gmail.com";
        $subject = "New Contact Form Submission: {$data['subject']}";
        $message = "Name: {$data['name']}\n";
        $message .= "Email: {$data['email']}\n";
        $message .= "Message: {$data['message']}\n";
        $headers = "From: {$data['email']}";

        mail($to, $subject, $message, $headers);

        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message. We will get back to you shortly.'
        ]);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        // Parse the PUT request body
        parse_str(file_get_contents("php://input"), $putData);

        // Validate required fields for update
        if (!isset($putData['id']) || empty(trim($putData['id']))) {
            throw new Exception("Message ID is required for update");
        }
        if (!isset($putData['status']) || empty(trim($putData['status']))) {
            throw new Exception("Status is required for update");
        }

        $id = trim($putData['id']);
        $status = trim($putData['status']);

        // Update the contact message status
        $stmt = $pdo->prepare("UPDATE contact_messages SET status = :status WHERE id = :id");
        $stmt->execute([
            ':status' => $status,
            ':id' => $id
        ]);

        echo json_encode([
            'success' => true,
            'message' => 'Contact message updated successfully.'
        ]);
    } else {
        throw new Exception('Invalid request method');
    }
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>