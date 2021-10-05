SELECT * FROM sakila.staff;

SELECT COUNT(password) FROM sakila.staff;
-- Quantas senhas temos cadastradas nessa tabela?
-- Resposta: 1

SELECT COUNT(*) FROM sakila.staff;
-- Quantas pessoas temos no total trabalhando para nossa empresa?
-- Resposta: 2

SELECT COUNT(email) FROM sakila.staff;
-- Quantos emails temos cadastrados nessa tabela?
-- Resposta: 2