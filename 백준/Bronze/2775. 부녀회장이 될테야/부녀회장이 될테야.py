n = int(input())

for _ in range(n):
  floor = int(input())
  room = int(input())
  res_num = [x for x in range(1, room+1)]
  for i in range(floor):
    for j in range(1, room):
      res_num[j] += res_num[j-1]
  print(res_num[-1])