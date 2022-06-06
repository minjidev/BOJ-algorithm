import sys

lst = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
n, b = map(int, sys.stdin.readline().split())
ans = ''

while n != 0:
  # 나머지 더해주기
  ans += str(lst[n%b])
  # 몫 
  n = n//b

print(ans[::-1])