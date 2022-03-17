"""
Exercício 8:

Agora um desafio, vá ao site
https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags
e recupere as imagens de todas as bandeiras.

Faça requisições para as URLs das imagens e
escreva seus conteúdos em arquivos binários.
São 206 ao total.
"""

import requests
from parsel import Selector


URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(URL_BASE)
selector = Selector(text=response.text)

images = selector.css(".image img::attr(src)").getall()

for image in images:
    filename = image.split("/")[-1]
    image_url = "https://" + image[2:]
    image_content = requests.get(image_url).content
    with open(filename, "wb") as file:
        file.write(image_content)
