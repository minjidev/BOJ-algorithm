import sys
n = sys.stdin.readline().rstrip()
for _ in range(int(n)):
  sum_val = sum(map(int,sys.stdin.readline().rstrip().split()))
  print(sum_val)