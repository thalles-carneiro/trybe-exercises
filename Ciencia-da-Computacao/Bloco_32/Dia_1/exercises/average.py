# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
numbers = [1, 6, 4, 8, 3]


def average(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)


print(f"A média dos valores na lista {numbers} é igual a: {average(numbers)}")
