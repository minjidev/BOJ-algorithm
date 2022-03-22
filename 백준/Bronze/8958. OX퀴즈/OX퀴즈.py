import sys
n = int(input())
data = []
for i in range(n):
  data.append(sys.stdin.readline().rstrip())

for j in data:
  count = 0
  result = []
  for el in j:
    if el == 'X':
      count = 0
      continue
    count += 1 
    result.append(count)
  print(sum(result))