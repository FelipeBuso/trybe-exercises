def fibonacci(n):
    inicio = [0, 1]
    numero = 0

    for i in range(n - 1):
        numero = inicio[i] + inicio[i + 1]
        inicio.append(numero)
    return numero


def fibonacci2(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
