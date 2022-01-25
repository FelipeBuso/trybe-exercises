import json

# books = []
categories = set()
with open("file.json", "r") as file:
    content = file.read()
    books = json.loads(content)
    print(books[0])
