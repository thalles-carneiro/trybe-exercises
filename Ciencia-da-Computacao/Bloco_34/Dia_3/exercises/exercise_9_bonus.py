"""
Exercício 9:

Alguns sites possuem paginação feita através de rolagem infinita.
Descubra como funciona a rolagem infinita e extraia todas as citações
do seguinte site: http://quotes.toscrape.com/scroll.

São 100 citações no total.
"""

import requests


has_next = True
page = 1
number_of_quotes = 0

while has_next:
    QUOTES_URL = f"http://quotes.toscrape.com/api/quotes?page={page}"
    response = requests.get(QUOTES_URL)
    api_result = response.json()
    quotes = api_result["quotes"]
    for quote in quotes:
        print(quote["text"])
        number_of_quotes += 1

    has_next = api_result["has_next"]
    page += 1

print(f"Número de citações: {number_of_quotes}")
