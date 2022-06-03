import sys 
input = sys.stdin.readline
t = int(input())
lcm = 0

def lcm(a,b):
  x, y = a, b
  while b != 0:
    a, b = b, a%b
  gcd = a
    
  return x*y//gcd
  
for _ in range(t):
  a, b = map(int, input().split())
  print(lcm(a, b))