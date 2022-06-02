import sys 
input = sys.stdin.readline
upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lower='abcdefghijklmnopqrstuvwxyz'
num='0123456789'


while True:
  s = input()
  if s=='':
    break
  u = l = n = wh = 0
  for ch in s:
    if ch in upper:
      u += 1
    elif ch in lower:
      l += 1
    elif ch in num:
      n += 1
    elif ch == ' ':
      wh += 1
  print(l, u, n , wh)