# 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT Id, Title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = Books_Lent.book_id
);

# 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT Id, Title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = Books_Lent.book_id
    AND Title LIKE '%lost%'
);

# 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM hotel.Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE C.CustomerId = CarSales.CustomerID
);

# 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT
	C.Name AS `Nome_do_Cliente`,
    CA.Name AS `Modelo_do_Carro`
FROM
	hotel.Customers AS C 
INNER JOIN
	hotel.Cars AS CA
WHERE EXISTS (
	SELECT * FROM hotel.CarSales
	WHERE CarID = CA.Id AND CustomerId = C.CustomerID
);
