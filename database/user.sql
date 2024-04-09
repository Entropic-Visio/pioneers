-- Create the user database
CREATE DATABASE IF NOT EXISTS `user`;

-- Use the user database
USE `user`;

-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL
);

-- Insert some sample data
INSERT INTO `users` (`username`, `email`) VALUES ('john_doe', 'john@example.com');
INSERT INTO `users` (`username`, `email`) VALUES ('jane_smith', 'jane@example.com');
