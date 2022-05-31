import sys
l = sys.stdin.readline().rstrip()
stack = []
ans = 0

for i in range(len(l)):
  ch = l[i]
  if ch == '(':
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