import sys

def par(s):
    cnt = 0
    for cha in s:
      if cha == '(':
        cnt += 1
      else:
        cnt -= 1
      if cnt < 0:
        return 'NO'
        
    if cnt == 0:
      return 'YES'
    else:
      return 'NO'
      
t = int(sys.stdin.readline())
for _ in range(t):
  print(par(input()))