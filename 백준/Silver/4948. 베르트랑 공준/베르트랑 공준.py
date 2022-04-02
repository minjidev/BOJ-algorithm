import math
import sys

def p(m, n):
  n += 1
  arr = [True] * n
  for i in range(2, int(n**0.5)+1):
    if arr[i]:
      for j in range(2*i, n, i):
        arr[j] = False
  cnt = 0
  for x in range(m+1,n):
    if x > 1 and arr[x]:
      cnt += 1
  if cnt != 0: print(cnt)

a=True
while a != 0:
  a = int(sys.stdin.readline())
  b = 2*a
  p(a,b)

  

  
