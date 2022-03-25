"""

Exercício 2:

Em um jogo de baralho, as cartas estão representadas
por um array numérico. Para iniciar o jogo devemos
embaralhar as cartas. Faremos isto dividindo uma porção
de cartas em 2 e depois mesclando as duas porções.

Por exemplo:

Exemplo 1:
cartas = [2, 6, 4, 5]
cartas por parte = 2

resultado = [2, 4, 6, 5]

Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6]

"""

from random import randint


def shuffle(array):
    indexes = list(range(len(array)))

    result = []

    while len(indexes) > 0:
        random_index = randint(0, len(indexes) - 1)
        result.insert(indexes[random_index], array[indexes[random_index]])
        indexes.pop(random_index)

    return result


"""

# GABARITO

def shuffle(numbers, n):
    answer = []
    new_array_index = 0
    for index in range(n):
        answer.insert(new_array_index, numbers[index])
        new_array_index += 1
        answer.insert(new_array_index, numbers[index + n])
        new_array_index += 1
    return answer

"""

if __name__ == "__main__":
    cartas_1 = [2, 6, 4, 5]
    resultado_1 = shuffle(cartas_1)
    print(resultado_1)  # Resultado: [2, 4, 6, 5]

    cartas_2 = [1, 4, 4, 7, 6, 6]
    resultado_2 = shuffle(cartas_2)
    print(resultado_2)  # Resultado: [1, 7, 4, 6, 4, 6]
