import sys
mod = 9901

n = int(sys.stdin.readline())
d=[[0]*3 for _  in range(n+1)]
d[0][0] = 1

for i in range(1, n+1):
  d[i][0] = (d[i-1][0] + d[i-1][1] + d[i-1][2]) % mod
  d[i][1] = (d[i-1][0] + d[i-1][2]) % mod
  d[i][2] = (d[i-1][0] + d[i-1][1]) % mod
  
print(sum(d[n])%mod)
