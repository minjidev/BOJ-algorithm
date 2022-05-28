import sys
left = list(input())
right = []
t = int(sys.stdin.readline())
for _ in range(t):
  cmd = sys.stdin.readline().split()
  cmd_al = cmd[0]
  if cmd_al == 'L':
    if left:
      right.append(left.pop())
  elif cmd_al == 'D':
    if right:
      left.append(right.pop())
  elif cmd_al == 'B':
    if left:
      left.pop()
  elif cmd_al == 'P':
    left.append(cmd[1])

left += right[::-1]
print(''.join(left))