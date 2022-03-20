"""
Exercício 5:

Escreva um algoritmo recursivo que
identifica se um número é primo.
"""

# GABARITO ALTERADO


def temdivisor(n, i):
    if i == n:
        return False
    elif n % i == 0:
        return True
    else:
        return temdivisor(n, i + 1)


def primo(n):
    return n > 1 and not(temdivisor(n, 2))


if __name__ == "__main__":
    n = 11
    print(primo(n))
