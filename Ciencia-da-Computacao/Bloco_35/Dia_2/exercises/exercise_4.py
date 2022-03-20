"""
Exercício 4:

Escreva um algoritmo recursivo para encontrar
o máximo divisor comum ( mdc ) de dois inteiros.
"""


def mdc(a, b):  # GABARITO
    if b == 0:
        return a
    return mdc(b, a % b)


if __name__ == "__main__":
    a = 15
    b = 5
    print(mdc(a, b))
