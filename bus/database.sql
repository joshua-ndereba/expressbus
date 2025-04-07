-- Create the database
    CREATE DATABASE IF NOT EXISTS express_bus;

    -- Use the database
    USE express_bus;

    -- Create users table
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    -- Create routes table
    CREATE TABLE IF NOT EXISTS routes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        from_location VARCHAR(100) NOT NULL,
        to_location VARCHAR(100) NOT NULL
    );

    -- Create schedules table
    CREATE TABLE IF NOT EXISTS schedules (
        id INT AUTO_INCREMENT PRIMARY KEY,
        route_id INT NOT NULL,
        departure_time TIME NOT NULL,
        arrival_time TIME NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (route_id) REFERENCES routes(id) ON DELETE CASCADE
    );

    -- Create bookings table
    CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        schedule_id INT NOT NULL,
        travel_date DATE NOT NULL,
        seats TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (schedule_id) REFERENCES schedules(id) ON DELETE CASCADE
    );

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create payment_logs table
CREATE TABLE IF NOT EXISTS payment_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    phone VARCHAR(15) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    response TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);
