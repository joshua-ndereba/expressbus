<?php
header('Content-Type: application/json');
require 'db.php';

try {
    // Validate request method
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // Method Not Allowed
        throw new Exception('Invalid request method');
    }

    // Validate content type
    if ($_SERVER['CONTENT_TYPE'] !== 'application/x-www-form-urlencoded') {
        http_response_code(415); // Unsupported Media Type
        throw new Exception('Invalid content type. Expected application/x-www-form-urlencoded');
    }

    // Validate database connection
    if (!$pdo) {
        http_response_code(500); // Internal Server Error
        throw new Exception('Database connection failed');
    }

    // Validate inputs
    $from_location = trim($_POST['from_location'] ?? '');
    $to_location = trim($_POST['to_location'] ?? '');
    $bus_type = trim($_POST['bus_type'] ?? '');
    $departure_time = trim($_POST['departure_time'] ?? '');
    $arrival_time = trim($_POST['arrival_time'] ?? '');
    $price = trim($_POST['price'] ?? '');

    if (empty($from_location) || empty($to_location) || empty($bus_type) || empty($departure_time) || empty($arrival_time) || empty($price)) {
        http_response_code(400); // Bad Request
        throw new Exception('All fields are required');
    }

    if ($from_location === $to_location) {
        http_response_code(400); // Bad Request
        throw new Exception('Departure and destination cannot be the same');
    }

    // Check if route already exists
    $check = $pdo->prepare("SELECT id FROM routes WHERE from_location = ? AND to_location = ?");
    $check->execute([$from_location, $to_location]);
    if ($check->rowCount() > 0) {
        http_response_code(409); // Conflict
        throw new Exception('This route already exists');
    }

    // Insert new route
    $stmt = $pdo->prepare("
        INSERT INTO routes (from_location, to_location, bus_type, departure_time, arrival_time, price) 
        VALUES (:from_location, :to_location, :bus_type, :departure_time, :arrival_time, :price)
    ");
    $stmt->execute([
        ':from_location' => $from_location,
        ':to_location' => $to_location,
        ':bus_type' => $bus_type,
        ':departure_time' => $departure_time,
        ':arrival_time' => $arrival_time,
        ':price' => $price
    ]);

    $routeId = $pdo->lastInsertId();

    http_response_code(201); // Created
    echo json_encode([
        'success' => true,
        'message' => 'Route added successfully',
        'data' => [
            'id' => $routeId,
            'from' => $from_location,
            'to' => $to_location,
            'bus_type' => $bus_type,
            'departure_time' => $departure_time,
            'arrival_time' => $arrival_time,
            'price' => $price
        ]
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
