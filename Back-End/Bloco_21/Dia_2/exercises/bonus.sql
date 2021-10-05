# Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT
	M.id,
	M.title,
    M.director,
    M.year,
    M.length_minutes,
    M.theater_id
FROM
	Pixar.Movies AS M
		INNER JOIN
	Pixar.BoxOffice AS BO ON M.id = BO.movie_id
WHERE
	BO.rating > 8
		AND M.theater_id IS NOT NULL;
    
# Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT
	M1.title, M1.length_minutes,
    M2.title, M2.length_minutes
FROM
	Pixar.Movies AS M1,
    Pixar.Movies AS M2
WHERE
	M1.director = M2.director
		AND M1.title <> M2.title;

# Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
-- SUBQUERY
SELECT
	M.title
FROM
	Pixar.Movies AS M
WHERE
	M.length_minutes > 110
		AND M.id IN (
			SELECT
				BO.movie_id
            FROM
				Pixar.BoxOffice AS BO
			WHERE
				(BO.domestic_sales + BO.international_sales) > 500000000);	

-- INNER JOIN
SELECT
	M.title
FROM
	Pixar.Movies AS M
		INNER JOIN
	Pixar.BoxOffice AS BO ON M.id = BO.movie_id
WHERE
	M.length_minutes > 110
		AND (BO.domestic_sales + BO.international_sales) > 500000000;
