CREATE DATABASE IF NOT EXISTS diplomado_db;

USE diplomado_db;

CREATE TABLE IF NOT EXISTS persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    ciudad VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS formacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    institucion VARCHAR(255) NOT NULL,
    anio VARCHAR(50) NOT NULL,
    persona_id INT NOT NULL,
    FOREIGN KEY (persona_id) REFERENCES persona(id) ON DELETE CASCADE
);

INSERT INTO persona (nombre, apellido, ciudad, foto) VALUES 
('Roberto Carlos', 'Olguin Ledezma', 'Cochabamba', 'https://images.pexels.com/photos/36773391/pexels-photo-36773391.jpeg');

INSERT INTO formacion (titulo, institucion, anio, persona_id) VALUES 
('Computer Systems Engineering', 'Technological University', '2020', 1),
('Master in Software Development', 'Institute of Technology', '2022', 1),
('Docker Specialization Course', 'Educational Platform', '2023', 1);
