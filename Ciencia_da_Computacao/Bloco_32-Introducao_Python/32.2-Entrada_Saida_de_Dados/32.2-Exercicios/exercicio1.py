nome = input("Digite seu nome: ")
nome_slice = nome
for i in range(len(nome)):
    print(nome_slice)
    nome_slice = nome_slice[:-1]
