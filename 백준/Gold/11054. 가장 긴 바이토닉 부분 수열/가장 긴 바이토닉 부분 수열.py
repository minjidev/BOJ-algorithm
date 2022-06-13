import sys
input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))

d=[1]*n
d2 = [1]*n
# 증가하는 부분 수열 최대 길이
for i in range(n):
  for j in range(i):
    if a[i]>a[j]:
      d[i] = max(d[i], d[j]+1)
# 감소하는 부분 수열 최대 길이
for i in range(n-1, -1, -1):
  for j in range(n-1, i, -1):
    if a[i]>a[j]:
      d2[i] = max(d2[i], d2[j]+1)
         
result = [0]*n
# 중복된 값 1개 제외 최댓값 구하기
for i in range(n):
  result[i] = d[i] + d2[i] -1

print(max(result))