import sys
input = sys.stdin.readline

n = int(input())
a = [0]+[int(i) for i in input().split()]
d =[0]*(n+1)
for i in range(1, n+1):
  d[i]=1
  for j in range(1, i):
    # 증가하는 수열
    if a[j]<a[i]:
      d[i] = max(d[i], d[j]+1)  

print(max(d))