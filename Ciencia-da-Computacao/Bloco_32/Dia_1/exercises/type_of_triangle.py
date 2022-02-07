"""
  Crie uma função que receba os três lado de um
    triângulo e informe qual o tipo de triângulo
    formado ou "não é triangulo" , caso não seja
    possível formar um triângulo.

  Dica:

  Três lados formam um triângulo quando a soma
    de quaisquer dois lados for maior que o terceiro;
  Triângulo Equilátero: três lados iguais;
  Triângulo Isósceles: quaisquer dois lados iguais;
  Triângulo Escaleno: três lados diferentes.
"""


def type_of_triangle(sideA, sideB, sideC):
    is_valid_triangle = (
        sideA + sideB > sideC
        and sideA + sideC > sideB
        and sideB + sideC > sideA
    )
    if not is_valid_triangle:
        return "Não é triângulo"
    if sideA == sideB == sideC:
        return "Triângulo Equilátero"
    if sideA != sideB != sideC:
        return "Triângulo Escaleno"
    return "Triângulo Isósceles"


print(type_of_triangle(3, 5, 1))
