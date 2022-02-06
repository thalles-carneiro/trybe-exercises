"""
  Crie uma função que receba uma lista de nomes e retorne
    o nome com a maior quantidade de caracteres. Por exemplo,
    para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
    o retorno deve ser "Fernanda" .
    Uma dica: Utilize a função len() para verificar o tamanho do nome.
"""


""" def get_length_element(element):
    return element[1]


def find_biggest_name(names):
    name_list = [(name, len(name)) for name in names]
    name_list.sort(reverse=True, key=get_length_element)
    return name_list[0][0] """


def name_length(name):
    return len(name)


def find_biggest_name(names):
    name_list = names
    name_list.sort(reverse=True, key=name_length)
    return name_list[0]


print(
    find_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
)
