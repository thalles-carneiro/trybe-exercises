"""

Exercício 1 - Blefe

Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar
os número que a outra irá escolher. Cada jogador escolhe 5
números de 0 a 10, inclusive. A pontuação final é calculada
da seguinte forma:

- A nota de partida de cada pessoa é o maior número que a
outra pessoa não escolheu;
- O redutor é o menor numero que a outra pessoa não escolheu;
- A pontuação final é a nota de partida - redutor .

Exemplo:

clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco

"""


def quem_ganhou_blefe(players):
    names = [name for name in players]
    first_player_set = set(players[names[0]])
    second_player_set = set(players[names[1]])

    not_chosen_first_player = first_player_set.difference(second_player_set)
    not_chosen_second_player = second_player_set.difference(first_player_set)

    first_player_points = (
        max(not_chosen_first_player) - min(not_chosen_first_player)
    )
    second_player_points = (
        max(not_chosen_second_player) - min(not_chosen_second_player)
    )

    if first_player_points > second_player_points:
        return names[0]
    elif first_player_points < second_player_points:
        return names[1]
    else:
        None


"""

GABARITO:

# nota da partida
def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas, adivinhas):
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def quem_ganhou_blefe(jogadas):
    jogadores = list(jogadas.keys())

    primeira_nota = nota_individual(
        jogadas[jogadores[0]], jogadas[jogadores[1]]
    )

    segunda_nota = nota_individual(
        jogadas[jogadores[1]], jogadas[jogadores[0]]
    )

    if primeira_nota > segunda_nota:
        return jogadores[0]
    elif primeira_nota < segunda_nota:
        return jogadores[1]
    else:
        return None


quem_ganhou = quem_ganhou_blefe(entrada)

if quem_ganhou:
    print(f"Quem ganhou: {quem_ganhou} ")
else:
    print("Deu empate")

"""


if __name__ == "__main__":
    entrada = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 8, 9, 10]
    }  # saída: 'Marco'
    print(f"RESUTADO: {quem_ganhou_blefe(entrada)}")
