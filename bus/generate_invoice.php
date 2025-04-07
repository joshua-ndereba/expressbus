<?php
require('fpdf/fpdf.php');
require('phpqrcode/qrlib.php'); // Include QR code library
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
        SELECT b.*, r.from_location, r.to_location, r.bus_type, 
               r.departure_time, r.arrival_time, r.price, u.name, u.email 
        FROM bookings b 
        JOIN routes r ON b.route_id = r.id 
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
    
    // Add ticket details
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
    
    // Generate QR Code
    $qrCodePath = 'tickets/qrcode_' . $bookingId . '.png';
    $qrData = "Booking ID: $bookingId\nPassenger: {$booking['name']}\nRoute: {$booking['from_location']} to {$booking['to_location']}";
    QRcode::png($qrData, $qrCodePath);

    // Add QR Code to PDF
    $pdf->Image($qrCodePath, 10, $pdf->GetY() + 10, 30, 30);
    unlink($qrCodePath); // Delete QR code after adding to PDF

    // Add a thank-you note
    $pdf->Ln(10);
    $pdf->SetFont('Arial', 'I', 10);
    $pdf->MultiCell(0, 10, "Thank you for choosing Express Bus Services. Please keep this ticket as proof of your booking. Have a safe journey!");

    // Save the PDF to a file
    $filename = 'ticket_' . $bookingId . '.pdf';
    $pdf->Output('F', 'tickets/' . $filename);
    return $filename;
}

// Generate and download the ticket if booking_id is provided
if (isset($_GET['booking_id'])) {
    $filename = generateTicket($_GET['booking_id']);
    if ($filename) {
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        readfile('tickets/' . $filename);
        unlink('tickets/' . $filename); // Delete the file after download
    } else {
        echo "Error: Unable to generate ticket. Please try again.";
    }
}
?>