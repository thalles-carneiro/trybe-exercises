"""
Exercício 6:

Escreva um programa que se conecte ao banco de dados
library e liste os livros da coleção books para uma
determinada categoria recebida por uma pessoa usuária.
Somente o título dos livros deve ser exibido.
"""

from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    books = db.books.aggregate([
        { "$match": { "status": "PUBLISH" } },
        { "$unwind": "$categories" },
        { "$group": { "_id": "$categories", "count": { "$sum": 1 } } },
        { "$sort": { "count": -1 } },
    ])
    for book in books:
        print(book["_id"], book["count"])
