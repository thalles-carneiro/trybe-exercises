from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, inverso):
        self._cartas = cartas
        self._inverso = inverso
        self._pos = 0 if inverso is False else -1

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1 if self._inverso is False else -1
            return carta


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self, inverso=False):
        return IteradorDoBaralho(self._cartas, inverso)


baralho = Baralho().__iter__(inverso=True)
for carta in baralho:
    print(carta)


"""
GABARITO ALTERADO:

from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._pos = estrategia._initial_pos

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos = self._estrategia.proxima_carta(self._pos)
            return carta


class EstrategiaIteracao(ABC):
    def __init__(self):
        self._initial_pos = NotImplementedError

    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    def __init__(self):
        self._initial_pos = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    def __init__(self):
        self._initial_pos = -1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self.estrategia)


baralho = Baralho(EstrategiaRegular()).__iter__()
for carta in baralho:
    print(carta)

"""
