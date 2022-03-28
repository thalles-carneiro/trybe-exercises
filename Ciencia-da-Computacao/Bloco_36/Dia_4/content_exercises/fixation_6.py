def find_duplicate(numbers):
    duplicate = numbers[0]
    for num in numbers[1:]:
        if num == duplicate:
            return duplicate
        duplicate = num
    return duplicate


if __name__ == "__main__":
    entrada = [1, 3, 2, 4, 5, 1]  # saída: 1
    print(find_duplicate(entrada))
