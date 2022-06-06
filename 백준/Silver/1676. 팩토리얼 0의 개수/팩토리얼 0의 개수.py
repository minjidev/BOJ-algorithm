import sys

n = int(sys.stdin.readline())

def fac(n,m):
  ans = 0
  i = m
  while i <= n:
    ans += n//i
    i *= m
  return ans


print(fac(n, 5))