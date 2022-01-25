class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def diametro_circulo(self):
        return self.raio * 2
    
    def circunferencia_circulo(self):
        return self.raio * 3.14 * 2

    def area_circulo(self):
        return (self.raio ** 2) * 3.14
    
meu_circulo = Circulo(4)
print(meu_circulo.diametro_circulo())
print(meu_circulo.circunferencia_circulo())
print(meu_circulo.area_circulo())
