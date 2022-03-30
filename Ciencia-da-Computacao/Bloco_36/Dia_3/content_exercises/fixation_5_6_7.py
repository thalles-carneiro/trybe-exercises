"""

Exercício 5:

Consulte a forma de se criar um dicionário chamado
de dict comprehension e crie um dicionário que mapeia
inteiros de 3 a 20 para o seu dobro.

"""

inteiros_para_dobro = { num: num * 2 for num in range(3, 21) }

print("Dicionário de inteiros para o dobro:")
print(inteiros_para_dobro, end="\n\n")

"""

Exercício 6:

Dada uma string, construa um dicionário com a contagem
de cada caractere da palavra.

"""

string = "bbbbaaaacccaaaaaaddddddddccccccc"
contagem_de_letras = {}
for letter in string:
    if letter in contagem_de_letras:
        contagem_de_letras[letter] += 1
    else:
        contagem_de_letras[letter] = 1

print(f"Dicionário de letras na string '{string}':")
print(contagem_de_letras, end="\n\n")

"""

Exercício 7:

Utilize o dicionário criado no exercício 5. Para as chaves
ímpares, não queremos mais mapear para o seu sobro, mas sim,
para o seu triplo. Consulte o método keys() e atualize o seu
dicionário para a nova regra.

"""

inteiros_impares_triplo = { num: num * 3 if (num % 2 == 1) else num * 2 for num in range(3, 21) }

print("Dicionário de inteiros ímpares para o triplo:")
print(inteiros_impares_triplo)
