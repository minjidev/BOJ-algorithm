import sys
t = int(sys.stdin.readline())
ans = 0

for _ in range(t):
  line = sys.stdin.readline().rstrip()
  stack = []
  for cha in line:
    if stack and cha == stack[-1]:
        stack.pop()
    else:
      stack.append(cha)

  if not stack:
    ans += 1
print(ans)