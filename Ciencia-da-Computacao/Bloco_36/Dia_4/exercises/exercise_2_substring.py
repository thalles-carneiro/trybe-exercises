"""

Exercício 2 - Substring

Dada uma string, ache o tamanho da maior substring que não
tenha caracteres repetidos. Complexidade de tempo limite
aceitável: O(n^2).

"""


def biggest_substring_length_without_repetition(string):
    substr = set()
    biggest = 0

    for index, _ in enumerate(string):
        for letter in string[index:]:
            if letter not in substr:
                substr.add(letter)
            else:
                break
        if len(substr) > biggest:
            biggest = len(substr)
        substr.clear()

    return biggest


"""

GABARITO:

def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest

"""


if __name__ == "__main__":
    str = "serdrecisoestudarbastante"
    print(f"RESULTADO: {biggest_substring_length_without_repetition(str)}")
    # print(f"GABARITO: {longer_no_repeating_substring_len(str)}")
