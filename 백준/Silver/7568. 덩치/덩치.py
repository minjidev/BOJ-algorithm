p_lst = []
n = int(input())
for ppl in range(n):
  w, h = map(int, input().split())
  p_lst.append((w, h))

for i in p_lst:
  rank = 1
  for j in p_lst:
    if i[0] < j[0] and i[1] < j[1]:
      rank += 1
  print(rank, end=' ')