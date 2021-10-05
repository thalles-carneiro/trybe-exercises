USE sakila;

# 1. Insira um novo funcionário na tabela sakila.staff .
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, password, username)
VALUES ('Thalles', 'Carneiro', 2, 'thallescarneiro@gmail.com', 2, 1, 'trybemecontrata', 'Thalles');

# 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, password, username) VALUES
	('Tyrion', 'Lannister', 5, 'tyrion_lannister@hotmail.com', 1, 1, 'ihatemyfather', 'Tyrion'),
    ('Jon', 'Snow', 4, 'snow101@outlook.com', 1, 0, 'thewinteriscoming', 'Snow');

# 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO `sakila`.`actor` (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

# 4. Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO `sakila`.`category` (name)
VALUES
	('Anime'),
    ('Fantasy'),
    ('Old');

# 5. Cadastre uma nova loja na tabela sakila.store .   
INSERT INTO `sakila`.`store` (manager_staff_id, address_id)
VALUES (3, 5);