import sys
l = sys.stdin.readline().rstrip()
stack = []
ans = 0

for i, val in enumerate(l):
  if val == '(':
    stack.append(i)
  else:
    if stack:
      if i - stack[-1] == 1:
        stack.pop()
        ans += len(stack)
      else:
        stack.pop()
        ans += 1

print(ans)