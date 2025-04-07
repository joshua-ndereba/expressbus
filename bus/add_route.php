<?php
header('Content-Type: application/json');
require 'db.php';

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method');
    }

    // Validate inputs
    $from_location = trim($_POST['from_location'] ?? '');
    $to_location = trim($_POST['to_location'] ?? '');

    if (empty($from_location) || empty($to_location)) {
        throw new Exception('Both departure and destination locations are required');
    }

    if ($from_location === $to_location) {
        throw new Exception('Departure and destination cannot be the same');
    }

    // Check if route already exists
    $check = $pdo->prepare("SELECT id FROM routes WHERE from_location = ? AND to_location = ?");
    $check->execute([$from_location, $to_location]);
    if ($check->rowCount() > 0) {
        throw new Exception('This route already exists');
    }

    // Insert new route
    $stmt = $pdo->prepare("INSERT INTO routes (from_location, to_location) VALUES (:from_location, :to_location)");
    $stmt->execute([
        ':from_location' => $from_location,
        ':to_location' => $to_location
    ]);

    $routeId = $pdo->lastInsertId();

    echo json_encode([
        'success' => true,
        'message' => 'Route added successfully',
        'data' => [
            'id' => $routeId,
            'from' => $from_location,
            'to' => $to_location
        ]
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
