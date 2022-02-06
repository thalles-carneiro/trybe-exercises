# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
a, b = 8, 6


def bigger(a, b):
    if a > b:
        return a
    return b


print(f"O maior número entre {a} e {b} é o número: {bigger(a, b)}")
