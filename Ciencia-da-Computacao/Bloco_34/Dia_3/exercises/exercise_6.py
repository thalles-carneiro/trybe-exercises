"""
Exercício 6:

Escreva um programa que se conecte ao banco de dados
library e liste os livros da coleção books para uma
determinada categoria recebida por uma pessoa usuária.
Somente o título dos livros deve ser exibido.
"""

from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    library = client.get_database("library")
    books = library.books.find(
        { "categories": category },
        projection={ "_id": False, "title": True }
    )
    for book in books:
        print(book["title"])
