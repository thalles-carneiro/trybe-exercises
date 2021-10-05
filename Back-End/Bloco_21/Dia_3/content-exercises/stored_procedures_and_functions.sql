-- Desafios stored procedure

# 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

-- Criando o procedure:
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
	SELECT
		actor_id,
        COUNT(film_id) AS `film_count`
	FROM
		film_actor
	GROUP BY
		actor_id
	ORDER BY `film_count` DESC
    LIMIT 10;        
END $$

DELIMITER ;

-- Como usar:
CALL ShowTop10Actors();

# 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

-- Criando o procedure:
USE sakila;
DELIMITER $$

CREATE PROCEDURE FindMoviesByCategory(IN category VARCHAR(100))
BEGIN
    SELECT F.film_id, F.title, C.category_id, C.name
	FROM film AS F
	INNER JOIN film_category AS FC ON F.film_id = FC.film_id
	INNER JOIN category AS C ON FC.category_id = C.category_id
	WHERE C.name = category;
END $$

DELIMITER ;

-- Como usar:
CALL FindMoviesByCategory('Comedy');

# 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

-- Criando o procedure:
USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckIfActiveCustomer(
	IN customer_email VARCHAR(200),
    OUT isActive BOOL)
BEGIN
	SELECT active INTO isActive
	FROM customer
	WHERE email = customer_email;
END $$

DELIMITER ;

-- Como usar:
SELECT @activeStatus;

# Active customer
CALL CheckIfActiveCustomer('SANDRA.MARTIN@sakilacustomer.org', @activeStatus);
SELECT @activeStatus;

# Not active customer
CALL CheckIfActiveCustomer('MARY.SMITH@sakilacustomer.org', @activeStatus);
SELECT @activeStatus;

-- Desafios stored function

# 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .

-- Criando a function:
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM payment
    WHERE customer_id = id
    INTO total_payments;
	RETURN total_payments;
END $$

DELIMITER ;

-- Como usar:
SELECT GetTotalPayments(2);

# 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.

-- Criando a function:
USE sakila;
DELIMITER $$

CREATE FUNCTION MovieTitleByInventoryId(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE movie_title VARCHAR(500);
	SELECT (
		SELECT title
        FROM film
        WHERE film_id = I.film_id)
    FROM inventory AS I
    WHERE inventory_id = id
    INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

-- Como usar:
SELECT MovieTitleByInventoryId(1);

# 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

-- Criando a function:
USE sakila;
DELIMITER $$

CREATE FUNCTION
	GetMovieAmountByCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE movie_amount INT;
    SELECT (
		SELECT COUNT(*)
        FROM film_category
        WHERE category_id = C.category_id)
    FROM category AS C
    WHERE name = category
    INTO movie_amount;
    RETURN movie_amount;
END $$

DELIMITER ;

-- Como usar:
SELECT GetMovieAmountByCategory('Horror');
