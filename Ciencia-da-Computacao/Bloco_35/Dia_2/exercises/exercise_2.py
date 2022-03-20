"""
Exercício 2:

Transforme o algoritmo criado anteriormente em recursivo.
"""


def count_even_recursive(n):
    if n < 1:
        return 0
    qtd_even = 1 if (n % 2 == 0) else 0
    return qtd_even + count_even_recursive(n - 1)


if __name__ == "__main__":
    n = 7
    print(f"Quantidade de números pares entre 1 e {n}:")
    print(f"{count_even_recursive(n)}")
