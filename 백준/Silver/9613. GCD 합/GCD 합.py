import sys

def gcd(a, b):
  while b!=0:
    a, b = b, a%b
  return a

input = sys.stdin.readline
t = int(input())

for _ in range(t):
  line = list(map(int, input().split()))
  n = line[0]
  num_lst = line[1:]
  ans = 0
  for i in range(n-1):
    for j in range(i+1, n):
      ans += gcd(num_lst[i], num_lst[j])
  print(ans)