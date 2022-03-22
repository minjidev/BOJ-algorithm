data = []
for i in range(3):
  data.append(int(input()))
a = data[0]
b = data[1]
c = data[2]

result = str(a * b * c)
for i in range(10):
  print(result.count(f'{i}'))