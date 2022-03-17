"""
Exercício 4:

Baseados em uma página contendo detalhes sobre um livro
http://books.toscrape.com/catalogue/the-grand-design_405/index.html,
faça a extração dos campos título, preço, descrição e url contendo a
imagem de capa do livro.

O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76.

A descrição de ter o sufixo "more..." removido quando existir.

Os campos extraídos devem ser apresentados separados por vírgula.
Ex: título,preço,descrição,capa.

Exercício 5:

Modifique o exercício anterior para retornar também quantos livros
estão disponíveis apresentando como último campo no retorno.
"""

import requests
from parsel import Selector


URL_BASE = "http://books.toscrape.com/catalogue/"
headers = {"User-Agent": "Chrome", "Accept": "text/html"}

response = requests.get(URL_BASE + "the-grand-design_405/index.html", headers=headers)
selector = Selector(response.text)

title = selector.css(".product_main h1::text").get()

price = selector.css(".product_main .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = " ...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css(".thumbnail img::attr(src)").get()

availability = selector.css(".product_main .availability::text").re_first(r"\d")

print(title, price, description, cover, availability, sep=",")
