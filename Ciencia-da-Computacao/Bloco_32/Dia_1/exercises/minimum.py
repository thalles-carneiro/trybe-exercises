"""
  Exercício Bônus 1:
    Dada uma lista, descubra o menor elemento.
    Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .
"""


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def minimum(numbers):
    copy_numbers = numbers
    copy_numbers.sort()
    return copy_numbers[0]


print(minimum(numbers))


"""
GABARITO:


def minimum(numbers):
    smaller = number[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


def minimum(numbers):
    return min(numbers)

# ou mesmo
minimum = min


"""
