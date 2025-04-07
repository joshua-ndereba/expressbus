<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
require_once 'db.php';

function sendTicketEmail($bookingId) {
    global $pdo;
    
    // Fetch booking details
    $stmt = $pdo->prepare("
        SELECT u.email, u.name, r.from_location, r.to_location, 
        b.travel_date, s.departure_time 
        FROM bookings b 
        JOIN users u ON b.user_id = u.id 
        JOIN schedules s ON b.schedule_id = s.id 
        JOIN routes r ON s.route_id = r.id 
        WHERE b.id = ?
    ");
    $stmt->execute([$bookingId]);
    $booking = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$booking) {
        return false;
    }
    
    // Generate PDF ticket
    require_once 'generate_invoice.php';
    $ticketFile = generateTicket($bookingId);
    
    // Create email
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com';
        $mail->Password = 'your-app-password';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        // Recipients
        $mail->setFrom('your-email@gmail.com', 'Express Bus Services');
        $mail->addAddress($booking['email'], $booking['name']);
        
        // Attachment
        $mail->addAttachment('tickets/' . $ticketFile);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Your Bus Ticket - Booking #' . $bookingId;
        $mail->Body = "
            <h2>Thank you for booking with Express Bus Services!</h2>
            <p>Here are your trip details:</p>
            <ul>
                <li>From: {$booking['from_location']}</li>
                <li>To: {$booking['to_location']}</li>
                <li>Date: {$booking['travel_date']}</li>
                <li>Departure Time: {$booking['departure_time']}</li>
            </ul>
            <p>Your e-ticket is attached to this email.</p>
            <p>Safe travels!</p>
        ";
        
        $mail->send();
        unlink('tickets/' . $ticketFile); // Delete the temporary file
        return true;
    } catch (Exception $e) {
        return false;
    }
}

// Send email if called directly
if (isset($_GET['booking_id'])) {
    $result = sendTicketEmail($_GET['booking_id']);
    echo json_encode(['success' => $result]);
}
?>