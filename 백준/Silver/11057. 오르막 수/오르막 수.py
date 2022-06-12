import sys
mod = 10007

n = int(sys.stdin.readline())
d=[[0]*10 for _ in range(n+1)]
for i in range(10):
  d[1][i] = 1
  
# 숫자 길이
for i in range(2, n+1):
  # 마지막 수 
  for j in range(10):
    # 직전 수
    for k in range(j+1):
      d[i][j] += d[i-1][k] % mod

print(sum(d[n])%mod)   