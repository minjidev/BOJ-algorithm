n = int(input())
lst = []
for i in range(n):
  a, b = map(int, input().split())
  lst.append(a+b)
for j in lst:
  print(j)
  