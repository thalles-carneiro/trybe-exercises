"""
    Exercício 2: Para exercitar nossa capacidade de abstração, vamos
    modelar algumas partes de um software de geometria. Como poderíamos
    modelar um objeto retângulo?

    Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte
    notação para descrever nossas abstrações:

    Nome da abstração
    Quadrado

    atributos/estados
    - lado (tamanho)

    comportamentos
    - calcular area (lado * lado)
    - calcular perímetro (4 * lado)
"""


class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def calc_area(self):
        return self.base * self.height

    def calc_perimeter(self):
        return (self.base * 2) + (self.height * 2)


# Testando
rectangle_1 = Rectangle(4, 5)
print(rectangle_1.calc_area())
print(rectangle_1.calc_perimeter())
