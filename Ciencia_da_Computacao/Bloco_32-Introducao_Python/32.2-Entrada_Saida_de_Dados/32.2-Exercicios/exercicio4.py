import json

categories = set()
with open("file.json", "r") as file:
    books = json.load(file)
    
    for line in books:
        print(line["categories"].split(","))
        # for book in line:
        #     category = book["categories"].split(",")
        #     # categories.add(book["categories"])
        #     print(categories)

# print(categories)
