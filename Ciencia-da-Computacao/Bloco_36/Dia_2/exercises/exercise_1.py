"""

Exercício 1:

Em um software monitor, que verifica a resiliência
de outro software, precisamos saber qual o tempo
máximo que um software permaneceu sem instabilidades.
Para isto, a cada hora é feito uma requisição ao sistema
e verificamos se está ok. Supondo um array que contenha
os estados coletados por nosso software, calcule quanto
tempo máximo que o servidor permaneceu sem instabilidades.

1 - OK
0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

"""


def verify_max_time_ok(collected_values):
    current_time = 0
    max_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            max_time = current_time if current_time > max_time else max_time
            current_time = 0

    return max_time


if __name__ == "__main__":
    valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]
    resultado_1 = verify_max_time_ok(valores_coletados_1)
    print(resultado_1)  # Resultado: 3

    valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]
    resultado_2 = verify_max_time_ok(valores_coletados_2)
    print(resultado_2)  # Resultado: 4
