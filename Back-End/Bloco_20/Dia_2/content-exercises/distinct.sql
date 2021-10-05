CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7)CHARACTER SET UTF8MB4,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
	('Rafael', 25),
    ('Amanda', 30),
    ('Robert', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
-- Monte uma query para encontrar pares únicos de nomes e idades .
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
-- Resposta: 5

-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
-- Resposta: 4

-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
-- Resposta: 4