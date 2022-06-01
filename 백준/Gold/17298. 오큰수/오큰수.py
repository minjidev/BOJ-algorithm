from collections import deque
import sys
input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))

ans = [-1] * n
stack = deque()

for i in range(n):
  # top과 현재 숫자 비교해 해당 숫자의 인덱스에 현재 숫자(오큰수) 넣기
  while stack and (stack[-1][0] < a[i]):
    val, idx = stack.pop()
    ans[idx] = a[i]
  stack.append([a[i], i])

print(*ans)