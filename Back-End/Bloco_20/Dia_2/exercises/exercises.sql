USE Scientists;

# 01. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution';

# 02. Escreva uma query para exibir três números em três colunas.
SELECT 5 AS 'A', 8 AS 'B', 2 AS 'C';

# 03. Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS 'Resultado';

# 04. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT ((2 + 7) * 8) / 2 AS 'Resultado';

# 05. Escreva uma query para exibir todas as informações de todos os cientistas.
USE Scientists;
SELECT * FROM Scientists;

# 06. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS `Nome do Projeto`, Hours AS `Tempo de Trabalho` FROM Projects; 

# 07. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT Name FROM Scientists
ORDER BY Name;

# 08. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT Name FROM Projects
ORDER BY Name DESC;

# 09. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS 'Resultado' FROM Projects;

# 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

# 11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM AssignedTo;

# 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;

# 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT Name FROM Projects
ORDER BY Hours
LIMIT 1
OFFSET 1;

# 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects
ORDER BY Hours
LIMIT 5;

# 15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem ', COUNT(DISTINCT Name), ' cientistas na tabela Scientists.') AS 'Resultado' FROM Scientists;