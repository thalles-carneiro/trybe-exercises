"""
Exercício 1:

Crie um algoritmo não recursivo para contar quantos
números pares existem em uma sequência numérica (1 a n).
"""


def count_even(n):
    qtd_even = 0
    for number in range(1, n + 1):
        qtd_even += 1 if (number % 2 == 0) else 0
    return qtd_even


if __name__ == "__main__":
    n = 7
    print(f"Quantidade de números pares entre 1 e {n}:")
    print(f"{count_even(n)}")
