import sys
MAX = 1000000
# n까지 소수 구하기
check = [True] * (MAX+1)
for i in range(2, int(MAX**0.5)+1):
  if check[i]:
    for j in range(2*i, MAX, i):
      check[j] = False

while True:
  n = int(sys.stdin.readline())
  if n == 0: break
  
  for i in range(3, MAX):
    if check[i] and check[n-i]:
      print(f'{n} = {i} + {n-i}')
      break