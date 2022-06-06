import sys

def gcd(a, b):
  while b!=0:
    a, b = b, a%b
  return a

input = sys.stdin.readline
n, s = map(int, input().split())
location = list(map(int, input().split()))
# 거리 리스트
d = [abs(i-s) for i in location]

# 거리들의 최대공약수 구하기
ans = d[0]
for i in range(n):
  ans = gcd(ans, d[i])
print(ans)
