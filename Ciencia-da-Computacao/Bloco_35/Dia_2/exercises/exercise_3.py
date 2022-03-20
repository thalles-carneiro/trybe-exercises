"""
Exercício 3:

Crie um algoritmo recursivo que encontre,
em uma lista, o maior número inteiro.
"""


def greater_number(numbers):
    length = len(numbers)

    if length == 1:
        return numbers[0]

    greater_number_than_left = greater_number(numbers[:length - 1])
    if greater_number_than_left > numbers[-1]:
        return greater_number_than_left
    return numbers[-1]


if __name__ == "__main__":
    numbers = [1, 21, 300, 4, 57]
    # numbers = [1, 2, 3, 7, 6, 9, 0, 4, 8]
    print(greater_number(numbers))
