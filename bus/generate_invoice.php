<?php
require('fpdf/fpdf.php');
require_once 'db.php';

class TicketPDF extends FPDF {
    function Header() {
        $this->SetFont('Arial', 'B', 15);
        $this->Cell(0, 10, 'Express Bus Services - E-Ticket', 0, 1, 'C');
        $this->Ln(10);
    }
    
    function Footer() {
        $this->SetY(-15);
        $this->SetFont('Arial', 'I', 8);
        $this->Cell(0, 10, 'Page '.$this->PageNo(), 0, 0, 'C');
    }
}

function generateTicket($bookingId) {
    global $pdo;
    
    // Fetch booking details
    $stmt = $pdo->prepare("
        SELECT b.*, s.departure_time, s.arrival_time, s.price, 
        r.from_location, r.to_location, u.name, u.email 
        FROM bookings b 
        JOIN schedules s ON b.schedule_id = s.id 
        JOIN routes r ON s.route_id = r.id 
        JOIN users u ON b.user_id = u.id 
        WHERE b.id = ?
    ");
    $stmt->execute([$bookingId]);
    $booking = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$booking) {
        return false;
    }
    
    $pdf = new TicketPDF();
    $pdf->AddPage();
    
    // Ticket Details
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(0, 10, 'Booking Reference: ' . $bookingId, 0, 1);
    $pdf->Cell(0, 10, 'Passenger: ' . $booking['name'], 0, 1);
    
    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(0, 10, 'From: ' . $booking['from_location'], 0, 1);
    $pdf->Cell(0, 10, 'To: ' . $booking['to_location'], 0, 1);
    $pdf->Cell(0, 10, 'Date: ' . $booking['travel_date'], 0, 1);
    $pdf->Cell(0, 10, 'Departure: ' . $booking['departure_time'], 0, 1);
    $pdf->Cell(0, 10, 'Arrival: ' . $booking['arrival_time'], 0, 1);
    $pdf->Cell(0, 10, 'Seat(s): ' . $booking['seats'], 0, 1);
    $pdf->Cell(0, 10, 'Amount Paid: KES ' . $booking['price'], 0, 1);
    
    // QR Code or Barcode can be added here
    
    $filename = 'ticket_' . $bookingId . '.pdf';
    $pdf->Output('F', 'tickets/' . $filename);
    return $filename;
}

// Generate ticket if called directly
if (isset($_GET['booking_id'])) {
    $filename = generateTicket($_GET['booking_id']);
    if ($filename) {
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        readfile('tickets/' . $filename);
        unlink('tickets/' . $filename); // Delete after download
    }
}
?>