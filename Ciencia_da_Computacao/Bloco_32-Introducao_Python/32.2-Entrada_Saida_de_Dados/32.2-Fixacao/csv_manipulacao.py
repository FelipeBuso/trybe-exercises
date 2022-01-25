import csv

with open("balneabilidade.csv") as file:
    # beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    # header, *data = beach_status_reader
    beach_status_reader = csv.DictReader(file, delimiter=",", quotechar='"')

bathing_by_campaign = {}
# for row in data:
for row in beach_status_reader:
    # campaign = row[6]
    # bathing = row[2]
    campaign = row["numero_boletim"]
    bathing = row["categoria"]
    if campaign not in bathing_by_campaign:
        bathing_by_campaign[campaign] = {
            "Própria": 0,
            "Imprópria": 0,
            "Muito Boa": 0,
            "Indisponível": 0,
            "Satisfatória": 0,
        }
    bathing_by_campaign[campaign][bathing] += 1

with open("report_por_campanha.csv", "w") as file:
    # writer = csv.writer(file)
    header = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]
    writer = csv.DictWriter(file, fieldnames=header)
    # writer.writerow(headers)

    # escreve as linhas de dados
    for campaign, bathing in bathing_by_campaign.items():
        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = [campaign]
        # for value in bathing.values():
        #     row.append(value)
        # row = [campaign, *bathing.values()]

        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = {"campanha": campaign}
        # for name, value in bathing.items():
        #     row[name] = value
        row = {"Campanha": campaign, **bathing}
        writer.writerow(row)
