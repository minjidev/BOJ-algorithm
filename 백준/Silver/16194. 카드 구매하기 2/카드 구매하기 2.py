import sys
input = sys.stdin.readline
n = int(input())
p = [0]+list(map(int, input().split()))

# 계산하지 않은 경우 -1
d = [-1 for _ in range(n+1)]
d[0]=0

for i in range(1, n+1):
  for j in range(1, i+1):
    # d가 계산되지 않앗거나 이전 값보다 작을 경우
    if d[i]==-1 or d[i]>d[i-j]+p[j]:
      d[i] = d[i-j]+p[j]
      
print(d[n])