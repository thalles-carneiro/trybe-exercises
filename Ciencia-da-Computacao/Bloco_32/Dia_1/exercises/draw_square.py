"""
  Faça um programa que, dado um valor n qualquer, tal que n > 1,
    imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
"""


""" def square_asteriscs(n):
    symbol = "*"
    limit = range(1, n + 1)
    for line in limit:
        column_string = ""
        for column in limit:
            column_string += symbol
        print(column_string) """


def draw_square(n):
    symbol = "*"
    for row in range(n):
        row_string = n * symbol
        print(row_string)


draw_square(5)
