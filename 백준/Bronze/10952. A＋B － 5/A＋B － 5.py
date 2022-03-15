import sys

while True:
  val = sum(map(int, sys.stdin.readline().rstrip().split()))
  if val == 0:
    break
  print(val)