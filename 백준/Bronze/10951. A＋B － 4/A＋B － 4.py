import sys

while True:
  try: 
    a, b = map(int, sys.stdin.readline().rstrip().split())   
  except:
    break
  print(a+b)