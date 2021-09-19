# 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.

-- Criando trigger:
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_insert
	BEFORE INSERT ON carros
	FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

-- Como ativar o trigger:
INSERT INTO carros (preco) VALUES (70000);

SELECT * FROM carros;

# 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

-- Criando trigger:
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_update
	BEFORE UPDATE ON carros
	FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

-- Como ativar o trigger:
UPDATE carros
SET preco = 60000, disponivel_em_estoque = 0
WHERE id_carro = 1;

SELECT * FROM carros;

# 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

-- Criando trigger:
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_delete
	AFTER DELETE ON carros
	FOR EACH ROW
BEGIN
	INSERT INTO
		log_operacoes (tipo_operacao, data_ocorrido)
	VALUES
		('EXCLUSÃO', NOW());
END $$
DELIMITER ;

-- Como ativar o trigger:
DELETE FROM carros
WHERE id_carro = 1;

SELECT * FROM carros;
