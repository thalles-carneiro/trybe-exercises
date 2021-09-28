DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE employees (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  register_date DATETIME NOT NULL
);

INSERT INTO employees
  (employee_id, first_name, last_name, email, phone_number, register_date)
VALUES
  (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
  (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99552-4996', '2020-02-05 00:00:00'),
  (14, 'Cintía', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
  (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:40:40');

CREATE TABLE sectors (
  sector_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

INSERT INTO sectors
  (sector_id, name)
VALUES
  (1, 'Administração'),
  (2, 'Vendas'),
  (3, 'Operacional'),
  (4, 'Estratégico'),
  (5, 'Marketing');

CREATE TABLE employee_sector (
  employee_id INT NOT NULL,
  sector_id INT NOT NULL,
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id)
);

INSERT INTO employee_sector
  (employee_id, sector_id)
VALUES
  (12, 1),
  (12, 2),
  (13, 3),
  (14, 4),
  (14, 2),
  (15, 5);
