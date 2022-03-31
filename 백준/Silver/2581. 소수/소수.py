import sys 

def prime(x):
  if x == 1: return False
  for i in range(2, x):
    if x%i == 0:
      return False
  return True

m = int(sys.stdin.readline())
n = int(sys.stdin.readline())
prime_num = []
for i in range(m, n+1):
  if prime(i):
    prime_num.append(i)

if prime_num:
  print(sum(prime_num), min(prime_num), sep='\n')
else:
  print(-1)