class Quadrado:
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        return self.lado * self.lado

    def calcular_perimetro(self):
        return self.lado * 4

meu_quadrado = Quadrado(5)
print(meu_quadrado.calcular_area())
print(meu_quadrado.calcular_perimetro())