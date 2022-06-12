import sys
n, k = map(int, input().split())
mod=1000000000
d = [[0]*(n+1) for _ in range(k+1)]
d[0][0] = 1
for k in range(1, k+1):
  for i in range(n+1):
    for j in range(i+1):
      d[k][i] += d[k-1][i-j]
      d[k][i] %= mod
      
print(d[k][n])