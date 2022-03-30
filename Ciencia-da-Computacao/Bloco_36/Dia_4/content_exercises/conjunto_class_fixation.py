class Conjunto:
    def __init__(self):
        self.set = [False] * 1001

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True

    def union(self, conjuntoB):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_set.add(index)

        return new_set

    def intersection(self, conjuntoB):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_set.add(index)

        return new_set

    def __str__(self):
        string = "{" + ", ".join([
            str(index)
            for index, is_in_set in enumerate(self.set)
            if bool(is_in_set)
        ]) + "}"
        return string

    def __contains__(self, item):
        return self.set[item]


if __name__ == "__main__":
    # conj = Conjunto()
    # for i in [0, 10, 100, 1000]:
    #     conj.add(i)
    # print(conj)

    # conj2 = Conjunto()
    # for i in [1, 2, 3]:
    #     conj2.add(i)
    # print(conj2)
    # print(1 in conj)
    # print(0 in conj)

    # conj3 = Conjunto()
    # for i in [7, 2, 10]:
    #     conj3.add(i)
    # print(conj3)

    # conj4 = Conjunto()
    # print(conj4)

    # conj1 = Conjunto()
    # for i in range(1, 11):
    #     conj1.add(i)

    # conj2 = Conjunto()
    # for i in range(10, 21):
    #     conj2.add(i)

    # conj3 = conj1.union(conj2)
    # print(conj3)

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = conj1.intersection(conj2)
    print(conj3)
