import sys
input = sys.stdin.readline
m = int(input())
n = int(input())
ans = []
for i in range(m, n+1):
  if int(i**0.5)**2 == i:
    ans.append(i)
if not ans:
  print(-1)
else:
  print(sum(ans), min(ans), sep='\n')
  