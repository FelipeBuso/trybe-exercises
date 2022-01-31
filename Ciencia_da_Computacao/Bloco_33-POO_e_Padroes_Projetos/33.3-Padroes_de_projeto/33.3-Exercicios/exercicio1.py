from abc import abstractmethod


class Player:
    def __init__(self, level):
        self.level = level

    @abstractmethod
    def atack(self):
        raise NotImplementedError


class Soldier(Player):
    def attack(self):
        return self.level * 1


class Jedi(Player):
    def attack(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
