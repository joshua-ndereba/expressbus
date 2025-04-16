<?php
header('Content-Type: application/json');
require_once 'db.php';
require 'vendor/autoload.php'; // Include PHPMailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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

    // Send email notification to admin using PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Enable debugging for SMTP
        $mail->SMTPDebug = 2; // Set to 2 for detailed debug output
        $mail->Debugoutput = function ($str, $level) {
            error_log("SMTP Debug [$level]: $str");
        };

        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'joshneid07@gmail.com'; // Replace with your email
        $mail->Password = 'ctgk pqdg tvmg ocja'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // Typically 587 for TLS, 465 for SSL

        // Email content
        $mail->setFrom($data['email'], $data['name']);
        $mail->addAddress('joshneid07@gmail.com'); // Replace with admin email
        $mail->Subject = "New Contact Form Submission: {$data['subject']}";
        $mail->Body = "Name: {$data['name']}\nEmail: {$data['email']}\nMessage: {$data['message']}";

        $mail->send();

        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message. We will get back to you shortly.'
        ]);
    } catch (Exception $e) {
        // Log detailed error for debugging
        error_log('Mailer Error: ' . $mail->ErrorInfo);
        throw new Exception('Email could not be sent. Please check your SMTP configuration.');
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>