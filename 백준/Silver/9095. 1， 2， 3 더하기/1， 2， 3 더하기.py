import sys
input = sys.stdin.readline
n = int(input())
num_lst = [int(input()) for i in range(n)]
m = max(num_lst)
d = [0] * (m+1)
d[0]=1
d[1]=1


for i in range(2, m+1):
  d[i] = d[i-1] + d[i-2] + d[i-3]

print(*[d[i] for i in num_lst], sep='\n')