import sys
x = int(sys.stdin.readline())
for i in range(x):
  h, w, n = map(int, sys.stdin.readline().split())
  if n % h == 0:
    room = h * 100 + n//h
  else:
    room = ((n%h) * 100) + (n//h+1)
  print(room)