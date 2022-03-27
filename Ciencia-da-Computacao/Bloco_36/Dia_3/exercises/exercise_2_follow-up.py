"""

Follow-ups:

1. Caso a empresa precise fazer essa consulta frequentemente,
como você pode tornar essas consultas mais eficientes? Como você
pode guardar o resultado de consultas anteriores?

2. Escreva um método para incluir uma nova pessoa na equipe de
uma outra pessoa. Seu método deve considerar que cada pessoa pode
ter no máximo k pessoas em seu time. Se o time estiver cheio, a
nova contratada pode ser alocada na equipe de qualquer pessoa
abaixo dela, não precisando ser na equipe imediatamente abaixo.

3. Se você adicionar uma nova contratação à lista de subordinadas,
a estrutura que você fez no follow-up 1 está desatualizada. Modifique
suas funções para que essa estrutura seja atualizada junto com a
adição de uma nova contratação. Faça isso sem rodar de novo a função
score() e lembre-se de atualizar todos os scores desde a pessoa da
presidência até a equipe que a nova contratação entrou.

"""


class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]


if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.add_person(None, 1)
    hierarchy.add_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.add_person(2, 4)
    hierarchy.add_person(4, 5)
    hierarchy.add_person(4, 6)
    hierarchy.add_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")

    hierarchy.add_person(4, 8)
    hierarchy.add_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")
