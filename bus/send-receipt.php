<?php
require 'vendor/autoload.php'; // Ensure PHPMailer is installed via Composer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['route'], $data['travelDate'], $data['passengers'], $data['seats'], $data['total'])) {
    echo json_encode(['message' => 'Invalid data received']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'joshneid07@gmail.com'; // Replace with your email
    $mail->Password = 'ctgk pqdg tvmg ocja '; // Replace with your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('joshneid07@gmail.com', 'Express Bus Services');
    $mail->addAddress('joshneid07@gmail.com'); // Replace with your email

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Booking Receipt';
    $mail->Body = "
        <h3>Booking Receipt</h3>
        <p><strong>Route:</strong> {$data['route']}</p>
        <p><strong>Travel Date:</strong> {$data['travelDate']}</p>
        <p><strong>Passengers:</strong> {$data['passengers']}</p>
        <p><strong>Seats:</strong> {$data['seats']}</p>
        <p><strong>Total:</strong> {$data['total']}</p>
    ";

    $mail->send();
    echo json_encode(['message' => 'Receipt emailed successfully']);
} catch (Exception $e) {
    echo json_encode(['message' => 'Failed to send email: ' . $mail->ErrorInfo]);
}
?>
