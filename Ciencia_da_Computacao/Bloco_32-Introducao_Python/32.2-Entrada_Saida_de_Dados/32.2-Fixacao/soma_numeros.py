lista_numeros = input("Digite os numeros separados por espaco: ")

total = 0

for num in lista_numeros.split(" "):
    if num.isdigit():
        total += int(num)
    else:
        print(f"Erro ao somar valores, {num} é um valor inválido")

print(total)
