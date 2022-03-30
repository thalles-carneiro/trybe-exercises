"""

Exercício 1 - Facebook

Você receberá uma lista de palavras e uma string.
Escreva uma função que decida quais palavras podem
ser formadas com os caracteres da string (cada
caractere só pode ser utilizado uma vez). Retorne
à soma do comprimento das palavras escolhidas.

Exemplo 1:

words = ["cat", "bt", "hat", "tree"], chars = "atach"
# saída: 6

Explicação: As palavras que podem ser formadas com
os caracteres da string são "cat" (tamanho 3) e "hat" (tamanho 3).

Exemplo 2:

words = ["hello", "world", "students"], chars = "welldonehoneyr"
# saída: 10

Explicação: As palavras que podem ser formadas com
os caracteres da string são "hello" (tamanho 5) e "world" (tamanho 5).

"""


def count_words(words, chars):
    valid_words_length = 0
    alphabet = {}

    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1
    print(f"Montamos o alfabeto: {alphabet}")

    for word in words:
        print(f"Analisando a palavra {word}")
        word_map = {}
        for letter in word:
            if letter not in alphabet:
                print(f"'{char}' não está no alfabeto. Desconsiderar palavra")
                break

            if letter not in word_map:
                word_map[letter] = 1
            else:
                word_map[letter] += 1

                if word_map[letter] > alphabet[letter]:
                    print(f"'{char}' ocorre com mais frequência ", end="")
                    print("do que no alfabeto. Desconsiderar palavra")
                    break
        else:
            print(f"Considerar {word}")
            valid_words_length += len(word)

    return valid_words_length


if __name__ == "__main__":
    words = ["cat", "bt", "hat", "tree"]  # "cat" e "hat"
    chars = "atach"  # { "a": 2, "t": 1, "c": 1, "h": 1 }
    print(count_words(words, chars), end="\n" * 2)  # saída: 6

    words = ["hello", "world", "students"]
    chars = "welldonehoneyr"
    print(count_words(words, chars))  # saída: 10
