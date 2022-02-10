import requests
import json

response = requests.get('https://api.github.com/users')
users = response.json()

for user in users:
  login = user["login"]
  url = user["url"]
  print(f"{login} {url}")