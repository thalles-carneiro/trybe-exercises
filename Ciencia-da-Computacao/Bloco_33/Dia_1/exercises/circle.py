"""
    Exercício 3: E como poderíamos definir um círculo?
    Qual seu nome, atributos e comportamentos?
"""


class Circle:
    PI = 3.14159

    def __init__(self, radius):
        self.radius = radius

    def calc_area(self):
        return self.PI * (self.radius ** 2)

    def calc_perimeter(self):
        return 2 * self.PI * self.radius


# Testando
circle_1 = Circle(4)
print(circle_1.calc_area())
print(circle_1.calc_perimeter())
