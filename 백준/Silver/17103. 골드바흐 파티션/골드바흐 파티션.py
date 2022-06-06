import sys


MAX = 1000001
check = [True] * (MAX)
# 에라토스테네스의 체 
check[0]=check[1]=False
for i in range(2, (int(MAX**0.5))+1):
  if check[i]:
    for j in range(2*i, MAX, i):
      check[j] = False

input = sys.stdin.readline
t = int(input())
for _ in range(t):
  n = int(input())
  ans = 0
  for i in range(n):
    # 순서만 다른 경우는 세지 말 것 
    if check[i] and check[n-i]:
      if i <= n-i:
        ans+=1 
  print(ans)
  