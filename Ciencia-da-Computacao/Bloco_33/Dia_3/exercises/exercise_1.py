from abc import ABC, abstractmethod


class Target(ABC):
    @abstractmethod
    def attack(self):
        raise NotImplementedError


class Soldier(Target):
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class JediAdapter(Target):
    def __init__(self, jedi):
        self.jedi = jedi

    def attack(self):
        return self.jedi.attackWithSaber()


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(JediAdapter(Jedi(20))).fight_enemy()
