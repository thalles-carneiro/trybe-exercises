# Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT
	M.title, BO.domestic_sales, BO.international_sales
FROM
	Pixar.Movies AS M
		INNER JOIN
	Pixar.BoxOffice AS BO ON M.id = BO.movie_id;

# Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT
	M.title, BO.domestic_sales, BO.international_sales
FROM
	Pixar.Movies AS M
		INNER JOIN
    Pixar.BoxOffice AS BO ON M.id = BO.movie_id
WHERE
	BO.international_sales > BO.domestic_sales;

# Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
	M.title, BO.rating
FROM
	Pixar.Movies AS M
		INNER JOIN
	Pixar.BoxOffice AS BO ON M.id = BO.movie_id
ORDER BY BO.rating DESC;

# Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	T.name, T.location,
    M.title, M.director, M.year, M.length_minutes
FROM
	Pixar.Theater AS T
		LEFT JOIN
	Pixar.Movies AS M ON T.id = M.theater_id
ORDER BY T.name ASC;

# Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	T.name, T.location,
    M.title, M.director, M.year, M.length_minutes
FROM
	Pixar.Theater AS T
		RIGHT JOIN
	Pixar.Movies AS M ON T.id = M.theater_id
ORDER BY T.name ASC;

# Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- SUBQUERY
SELECT
    (SELECT
		title
    FROM
		Pixar.Movies
	WHERE
		id = BO.movie_id) AS title
FROM
	Pixar.BoxOffice AS BO
WHERE BO.rating > 7.5;

-- INNER JOIN
SELECT
	M.title
FROM
	Pixar.Movies AS M
		INNER JOIN
	Pixar.BoxOffice AS BO ON M.id = BO.movie_id
WHERE BO.rating > 7.5;

# Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
-- SUBQUERY
SELECT
	title,
    (SELECT
		rating
	FROM
		Pixar.BoxOffice
    WHERE
		movie_id = M.id) AS rating
FROM
	Pixar.Movies AS M
WHERE year > 2009;

-- INNER JOIN
SELECT
	M.title, BO.rating
FROM
	Pixar.Movies AS M
		INNER JOIN
	Pixar.BoxOffice AS BO ON BO.movie_id = M.id
WHERE M.year > 2009;

# Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT
	T.name, T.location
FROM
	Pixar.Theater AS T
WHERE 
	EXISTS (
		SELECT
			*
		FROM
			Pixar.Movies
		WHERE
			theater_id = T.id);

# Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT
	T.name, T.location
FROM
	Pixar.Theater AS T
WHERE 
	NOT EXISTS (
		SELECT
			*
		FROM
			Pixar.Movies
		WHERE
			theater_id = T.id);
