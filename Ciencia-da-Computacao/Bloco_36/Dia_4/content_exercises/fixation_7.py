if __name__ == "__main__":
    estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    lista1_entregues = ['a', 'd', 'g', 'c']
    lista2_entregues = ['c', 'a', 'f']

    set_students = set(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    set_list1_delivered = set(['a', 'd', 'g', 'c'])
    set_list2_delivered = set(['c', 'a', 'f'])

    print("Quem ainda não entregou a lista 1? R: ", end="")
    print(set_students.difference(set_list1_delivered))

    print("Quem já entregou as duas listas? R: ", end="")
    print(set_students.intersection(set_list1_delivered, set_list2_delivered))

    print("Quem já entregou qualquer uma das duas listas? R: ", end="")
    print(set_list1_delivered.union(set_list2_delivered))

    print("Quem ainda não entregou nenhuma das listas? R: ", end="")
    print(set_students.difference(set_list1_delivered, set_list2_delivered))
