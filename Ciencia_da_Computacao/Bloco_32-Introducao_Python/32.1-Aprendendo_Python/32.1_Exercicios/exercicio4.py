def maior_nome(list):
    maior_nome = ""

    for nome in list:
        if len(nome) > len(maior_nome):
            maior_nome = nome

    return maior_nome


print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
