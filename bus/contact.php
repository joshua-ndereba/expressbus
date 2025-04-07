<?php
header('Content-Type: application/json');
require_once 'db.php';

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method');
    }

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
    $to = "admin@expressbus.com";
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

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}