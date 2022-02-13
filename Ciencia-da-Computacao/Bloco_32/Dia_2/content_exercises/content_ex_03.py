'''
    Exercício 3: Dado um arquivo contendo estudantes e suas
        respectivas notas, escreva um programa que lê todas essas
        informações e filtre mantendo somente as pessoas que estão
        reprovadas, e escreva seus nomes em outro arquivo. A nota
        miníma para aprovação é 6.

    Arquivo:
        Marcos 10
        Felipe 4
        José 6
        Ana 10
        Maria 9
        Miguel 5

    Exemplo saída:
        Felipe
        Miguel
'''

with open("arquivo.txt", mode="r") as file:
    reproved = []
    for person in file:
        personArr = person.split(' ')
        if int(personArr[1]) < 6:
            reproved.append(personArr[0])
    with open("arquivo_2.txt", mode="w") as reproved_names:
        for student in reproved:
            # reproved_names.write(f"{student}\n")
            print(student, file=reproved_names)
