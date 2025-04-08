<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'expressbus';
$username = 'root';
$password = '';

try {
    // Connect to the database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query to fetch routes
    $stmt = $pdo->query("SELECT from_location, to_location, bus_type, departure_time, arrival_time, price FROM routes");
    $routes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the routes as JSON
    echo json_encode($routes);
} catch (PDOException $e) {
    // Handle database connection errors
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
}
?>
