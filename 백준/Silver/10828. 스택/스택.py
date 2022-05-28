import sys
input = sys.stdin.readline
n = int(input())
stack = []
for _ in range(n):
  cmd = sys.stdin.readline().split()
  what = cmd[0]
  if what == 'push':
    stack.append(cmd[1])
  elif what == 'pop':
    if stack:
      print(stack.pop())
    else:
      print(-1)
  elif what == 'size':
      print(len(stack))
  elif what == 'empty':
    print(0 if stack else 1)
  elif what == 'top':
    if stack:
      print(stack[-1])
    else:
      print(-1)
  