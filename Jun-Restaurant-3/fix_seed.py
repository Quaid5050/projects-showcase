with open(r'e:\Jun\Restaurant3\src\data\seed.ts', 'r', encoding='utf-8') as f:
    content = f.read()

placeholders = [
    "'/images/menu/placeholder-pork.svg'",
    "'/images/menu/placeholder-noodle.svg'",
    "'/images/menu/placeholder-rice.svg'",
    "'/images/menu/placeholder-soup.svg'",
    "'/images/menu/placeholder-default.svg'",
]

for placeholder in placeholders:
    content = content.replace(placeholder, "''")

with open(r'e:\Jun\Restaurant3\src\data\seed.ts', 'w', encoding='utf-8', newline='') as f:
    f.write(content)

print('Done - replaced all placeholders')
