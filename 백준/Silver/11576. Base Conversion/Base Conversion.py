# a진법 -> b진법
import sys

input = sys.stdin.readline
a,b = map(int, input().split())
m = int(input())
a_list = [int(i) for i in input().split()]

# 10진수로 변경
ten = 0
a_list.reverse()
for i in range(m):
  ten += a_list[i]*(a**i) # 자릿수만큼 a의 거듭제곱 곱해주기

ans = []
while ten != 0:
  ans.append(ten%b)
  ten = ten//b

# 첫째자리가 앞에 오도록 뒤집기
ans.reverse()
print(' '.join(map(str,ans)))