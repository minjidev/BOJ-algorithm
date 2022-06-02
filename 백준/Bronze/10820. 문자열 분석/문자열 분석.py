import sys 

while True:
  s = sys.stdin.readline()
  if s=='':
    break
  u = l = n = wh = 0
  for ch in s:
    if ch.isupper():
      u += 1
    elif ch.islower():
      l += 1
    elif ch.isnumeric():
      n += 1
    elif ch == ' ':
      wh += 1
    
  print(l, u, n , wh)