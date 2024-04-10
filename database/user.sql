-- Create the user database
CREATE DATABASE IF NOT EXISTS `user`;

USE `user`;

CREATE TABLE IF NOT EXISTS `users` (
  `ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Username` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NOT NULL
);

INSERT INTO `users` (`Username`, `Email`, `Password`) VALUES ('john_doe', 'john@example.com', 'abc');
INSERT INTO `users` (`Username`, `Email`, `Password`) VALUES ('jane_smith', 'jane@example.com', '123');
