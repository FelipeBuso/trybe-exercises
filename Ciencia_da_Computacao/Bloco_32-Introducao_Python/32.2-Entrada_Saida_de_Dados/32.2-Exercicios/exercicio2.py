import random

words = ["macaco", "abelha", "cachorro"]
number_choices = 3
select_word = random.choice(words)
scrambled_word = "".join(random.sample(select_word, len(select_word)))
winer = False

for i in range(3):
    print(f"Você tem  {number_choices - i} chances")
    print(f"Qual palavra é essa: {scrambled_word}")
    res = input("resposta: ")
    if res == select_word:
        winer = True
        break
    print("resposta incorreta")
if winer:
    print("Parabéns, você acertou")
else:
    print("Mais sorte na próxima vez")
