import sys

t = int(sys.stdin.readline().rstrip())
for i in range(t):
  sum_val = sum(map(int, sys.stdin.readline().rstrip().split()))
  print("Case #%d:"%(i+1), sum_val)