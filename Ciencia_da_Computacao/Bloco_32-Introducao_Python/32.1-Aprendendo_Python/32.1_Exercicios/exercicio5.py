def cobertura_tinta(m):
    PRECO_LATA = 80
    LATA = 18
    RENDIMENTO_LATA = 3
    COBERTURA_LATA = LATA * RENDIMENTO_LATA

    total_latas_inteiras = m // COBERTURA_LATA
    # total_latas_parciais = lata_parcial(m)
    total_latas = total_latas_inteiras + lata_parcial(m, COBERTURA_LATA)
    custo_total = total_latas * PRECO_LATA

    return (total_latas, custo_total)


def lata_parcial(m, COBERTURA_LATA):
    if m % COBERTURA_LATA > 0:
        return 1
    else:
        return 0


print(cobertura_tinta(54))
print(cobertura_tinta(108))
print(cobertura_tinta(110))
