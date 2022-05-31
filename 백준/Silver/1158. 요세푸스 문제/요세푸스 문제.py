from collections import deque
import sys
n, k = map(int, sys.stdin.readline().split())
q = deque()
for i in range(1, n+1):
  q.append(i)
ans=[]

# 마지막 요소 전까지 k번째에 ans 저장 
# k번째 전까지 pop -> push 
for i in range(n-1):
  for j in range(k-1):
    q.append(q.popleft())
  ans += [q.popleft()]

ans += [q[0]]
print('<' + ', '.join(map(str, ans)) + '>')