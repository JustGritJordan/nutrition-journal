DROP DATABASE If EXISTS weekly_logs;
CREATE DATABASE weekly_logs;
USE weekly_logs;


CREATE TABLE meals (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food_name  VARCHAR(100),
    calories INT
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    meal_id INT, 
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);
