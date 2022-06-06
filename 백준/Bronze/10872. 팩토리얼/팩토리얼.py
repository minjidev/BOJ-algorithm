import sys
n = int(sys.stdin.readline())

r=1
for i in range(1, n+1):
  r *= i
print(r)