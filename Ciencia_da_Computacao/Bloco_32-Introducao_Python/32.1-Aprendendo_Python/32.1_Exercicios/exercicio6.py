def e_triangulo(a, b, c):
    NAO = "Não é triangulo"
    if a + b < c:
        return NAO
    elif b + c < a:
        return NAO
    elif c + a < b:
        return NAO
    else:
        if a == b == c:
            return "Triangulo Equilatero"
        elif a == b or b == c or a == c:
            return "Triangulo Isóceles"
        else:
            return "Triangulo Escaleno"


print(e_triangulo(1, 2, 3))
print(e_triangulo(2, 2, 2))
print(e_triangulo(3, 7, 3))
print(e_triangulo(3, 2, 3))
