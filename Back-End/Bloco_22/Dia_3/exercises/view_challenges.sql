/*
  1. Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
*/

-- Cria a view utilizando subqueries
CREATE VIEW film_with_categories AS
  SELECT
    (
      SELECT
        title
      FROM
        sakila.film
      WHERE
        film_id = FC.film_id;
    ) AS `title`,
    category_id,
    (
      SELECT
        name
      FROM
        sakila.category
      WHERE
        category_id = FC.category_id;
    ) AS `name`
  FROM
    sakila.film_category AS FC
  ORDER BY
    `title`;

-- Cria a view utilizando inner join
CREATE VIEW film_with_categories AS
  SELECT
    F.title, FC.category_id, C.name
  FROM
    sakila.film_category AS FC
  INNER JOIN
    sakila.film AS F ON F.film_id = FC.film_id
  INNER JOIN
    sakila.category AS C ON C.category_id = FC.category_id
  ORDER BY
    F.title;

-- Dropa a view
DROP VIEW film_with_categories;

-- Faz uma consulta utilizando a view
SELECT * FROM film_with_categories;

/*
  2. Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
*/

-- Cria a view utilizando subqueries
CREATE VIEW film_info AS
  SELECT
    FA.actor_id,
    (
      SELECT
        CONCAT(first_name, ' ', last_name)
      FROM
        sakila.actor
      WHERE
        actor_id = FA.actor_id
    ) AS `actor`, 
    (
      SELECT
        title
      FROM
        sakila.film
      WHERE
        film_id = FA.film_id
    ) AS `title`
  FROM
    sakila.film_actor AS FA
  ORDER BY
    `actor`;

-- Cria a view utilizando inner join
CREATE VIEW film_info AS
  SELECT
    FA.actor_id,
    CONCAT(A.first_name, ' ', A.last_name) AS `actor`,
    F.title
  FROM
    sakila.film_actor AS FA
  INNER JOIN
    sakila.actor AS A ON A.actor_id = FA.actor_id
  INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id
  ORDER BY
    `actor`;

-- Dropa a view
DROP VIEW film_info;

-- Faz uma consulta utilizando a view
SELECT * FROM film_info;

/*
  3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
*/

-- Cria a view utilizando subqueries
CREATE VIEW address_info AS
  SELECT
    address_id,
    address,
    district,
    city_id,
    (
      SELECT
        city
      FROM
        sakila.city
      WHERE
        city_id = A.city_id
    ) AS `city`
  FROM
    sakila.address AS A
  ORDER BY
    `city`;

-- Cria a view utilizando inner join
CREATE VIEW address_info AS
  SELECT
    A.address_id, A.address, A.district, A.city_id, C.city
  FROM
    sakila.address AS A
  INNER JOIN
    sakila.city AS C ON C.city_id = A.city_id
  ORDER BY
    C.city;

-- Dropa a view
DROP VIEW address_info;

-- Faz uma consulta utilizando a view
SELECT * FROM address_info;

/*
  4. Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.
*/

-- Cria a view utilizando subqueries
CREATE VIEW movies_languages AS
  SELECT
    F.title,
    F.language_id,
    (
      SELECT
        name
      FROM
        sakila.language
      WHERE
        language_id = F.language_id
    ) AS `language`
  FROM
    sakila.film AS F;

-- Cria a view utilizando inner join
CREATE VIEW movies_languages AS
  SELECT
    F.title,
    F.language_id,
    L.name AS `language`
  FROM
    sakila.film AS F
  INNER JOIN
    sakila.language AS L ON L.language_id = F.language_id;

-- Dropa a view
DROP VIEW movies_languages;

-- Faz uma consulta utilizando a view
SELECT * FROM movies_languages;
