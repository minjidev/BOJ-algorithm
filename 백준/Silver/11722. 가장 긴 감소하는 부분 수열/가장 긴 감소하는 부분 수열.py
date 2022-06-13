import sys
input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))
a.reverse() # 수열 반대로

d=[0]*n
# 증가하는 수열 최대 길이 
for i in range(n): 
  d[i]=1
  for j in range(i):
    if a[j] < a[i]:
      d[i] = max(d[i], d[j]+1)

print(max(d))