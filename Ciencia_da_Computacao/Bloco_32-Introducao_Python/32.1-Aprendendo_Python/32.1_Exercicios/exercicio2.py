def media_aritimetica(lista):
    soma_lista = 0
    len_list = len(lista)

    for numero in lista:
        soma_lista += numero
    return soma_lista / len_list


print(media_aritimetica([1, 2, 3]))
