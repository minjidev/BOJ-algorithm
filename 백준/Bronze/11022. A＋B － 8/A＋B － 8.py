import sys

t = int(sys.stdin.readline().rstrip())
for i in range(t):
  a,b = map(int, sys.stdin.readline().rstrip().split())
  print("Case #%d: %d + %d = %d" %(i+1, a, b, a+b))
