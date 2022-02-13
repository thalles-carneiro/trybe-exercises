"""
    Exercício 1: Faça um programa que receba um nome
        e imprima o mesmo na vertical em escada invertida.

    Exemplo:
        Entrada:
            PEDRO
        Saída:
            PEDRO
            PEDR
            PED
            PE
            P
"""


def vertical_inverted_ladder(name):
    counter = len(name)
    while counter > 0:
        print(name[:counter])
        counter -= 1


if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)
