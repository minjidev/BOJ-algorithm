import sys
input = sys.stdin.readline
t = int(input()) 

for _ in range(t):
  m, n, x, y = map(int, input().split()) # x, y: <5, 7>
  x-=1
  y-=1
  k=x # x값 고정 
  while k < n*m: # 전체(각 n마다 m개씩 반복)
    if k%n == y:
      print(k+1)
      break
    k += m # x값 m씩 증가 
  else:
    print(-1)

