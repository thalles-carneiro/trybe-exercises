from statistics import mean, median, mode


class Statistics:
    @classmethod
    def mean(cls, numbers):
        return mean(numbers)

    @classmethod
    def median(cls, numbers):
        return median(numbers)

    @classmethod
    def mode(cls, numbers):
        return mode(numbers)


print(Statistics.mean([8, 4, 6, 10, 4]))
print(Statistics.median([8, 4, 6, 10, 4]))
print(Statistics.mode([8, 4, 6, 10, 4]))

"""
GABARITO:

from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number

"""
