"""
  Exercício Bônus 2:
    Faça um programa que, dado um valor n qualquer,
    tal que n > 1, imprima na tela um triângulo retângulo
    com n asteriscos de base.
"""


def draw_triangle(n):
    symbol = "*"
    for counter in range(1, n + 1):
        print(counter * symbol)


draw_triangle(5)
