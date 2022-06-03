import sys
a, b = map(int, sys.stdin.readline().split())
gcd = lcm = 0
x, y = a, b
while b != 0:
  a, b = b, a%b
gcd = a
lcm = (x * y) // gcd

print(gcd, lcm, sep='\n')