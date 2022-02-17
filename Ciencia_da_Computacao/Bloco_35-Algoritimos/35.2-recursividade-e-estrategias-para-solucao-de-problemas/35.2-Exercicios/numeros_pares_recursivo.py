def numeros_pares(n):
  if n == 1:
    return 0
  elif n % 2 ==0:
    return 1 + numeros_pares(n - 1)
  else:
    return numeros_pares(n -1)

numeros_pares(10)