import sys
input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))

d=[0]*n

# 앞에서부터 더한 값
for i in range(n):
  d[i]=a[i]
  if i>0:
    d[i] = max(d[i], d[i-1]+a[i])

d2 = [0]*n
# 뒤에서부터 더한 값
for i in range(n-1, -1, -1):
  d2[i]=a[i]
  if i<n-1:
    d2[i] = max(d2[i], d2[i+1]+a[i])


ans = max(d)
for i in range(1, n-1):
  ans = max(ans, d[i-1]+d2[i+1])
print(ans)