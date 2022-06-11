import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
d =[0]*n

for i in range(n):
  d[i]=1
  for j in range(i):
    # 증가하는 수열
    if a[j]<a[i]:
      d[i] = max(d[i], d[j]+1)
# 최장길이 출력
print(max(d))

lis = []
length = max(d)
# 거꾸로 순환하면서
for i in range(n-1, -1, -1):
  # LIS 수열이라면
  if d[i] == length:
    lis.append(a[i])
    length -= 1
# 큰 수부터 저장했기 때문에 반대로
lis.reverse()
print(*lis)