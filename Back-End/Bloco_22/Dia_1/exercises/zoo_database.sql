DROP DATABASE IF EXISTS zoo;
CREATE DATABASE zoo;
USE zoo;

CREATE TABLE species (
  id INT PRIMARY KEY AUTO_INCREMENT,
  specie VARCHAR(50) NOT NULL
);

CREATE TABLE locations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  location VARCHAR(50) NOT NULL
);

CREATE TABLE managers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL
);

CREATE TABLE animals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  specie_id INT NOT NULL,
  sex VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  location_id INT NOT NULL,
  FOREIGN KEY (specie_id) REFERENCES species (id),
  FOREIGN KEY (location_id) REFERENCES locations (id)
);

CREATE TABLE caregivers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES managers (id)
);

CREATE TABLE animals_caregivers (
  animal_id INT NOT NULL,
  caregiver_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY (animal_id, caregiver_id),
  FOREIGN KEY (animal_id) REFERENCES animals(id),
  FOREIGN KEY (caregiver_id) REFERENCES caregivers(id)
);
