import sys
input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))


d=[0]*n
for i in range(n): 
  d[i]=1
  for j in range(i):
    if a[j] > a[i]:
      d[i] = max(d[i], d[j]+1)

print(max(d))