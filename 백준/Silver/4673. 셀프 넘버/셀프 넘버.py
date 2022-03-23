def d(n):
  n = n + sum(map(int, str(n)))
  return n

generated_num = set()
for i in range(1, 10001):
  generated_num.add(d(i))

for j in range(1, 10001):
  if j not in generated_num:
    print(j)