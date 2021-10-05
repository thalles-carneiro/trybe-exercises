# 1. Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como a data atual.

-- Criando os triggers:
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movie_insert
	BEFORE INSERT ON movies
	FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER trigger_movie_log_insert
	AFTER INSERT ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO
		movies_logs (movie_id, executed_action, log_date)
    VALUES
		(NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

-- Ativando os triggers:
INSERT INTO movies (ticket_price, ticket_price_estimation)
VALUES (30, 'Increasing');

SELECT * FROM movies;
SELECT * FROM movies_logs;

# 2. Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , executed_action e log_date ).

-- Criando o trigger:
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movie_update
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF (NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
	INSERT INTO movies_logs (movie_id , executed_action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;

-- Ativando o trigger:
UPDATE movies 
SET ticket_price = 25
WHERE movie_id = 1;

SELECT * FROM movies;
SELECT * FROM movies_logs;

# 3. Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.

-- Criando o trigger:
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movie_delete
	AFTER DELETE ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (OLD.movie_id, 'DELETE', NOW());
END $$
DELIMITER ;

-- Ativando o trigger:
SELECT * FROM movies;

DELETE FROM movies
WHERE movie_id = 1;

SELECT * FROM movies;
SELECT * FROM movies_logs;
