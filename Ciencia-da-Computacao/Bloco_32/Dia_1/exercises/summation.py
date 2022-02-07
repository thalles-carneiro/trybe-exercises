"""
  Exercício Bônus 3:
    Crie uma função que receba um número inteiro N
    e retorne o somatório de todos os números de 1 até N.
    Por exemplo, para N = 5 , o valor esperado será 15.
"""


def summation(n):
    sum = 0
    for counter in range(1, n + 1):
        sum += counter
    return sum


print(summation(5))


"""
GABARITO:


def summation(limit):
    return sum(range(1, limit + 1))


"""
