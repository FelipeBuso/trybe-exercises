def imprime_quadrado(n):
    linha = ""

    for i in range(n):
        linha += "*"

    for j in range(n):
        print(linha)


imprime_quadrado(5)
