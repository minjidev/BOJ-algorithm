import sys
n = int(sys.stdin.readline())
a = [int(input()) for _ in range(n)]
m = 0
stack = []
answer = ''
for num in a:
  if m < num:
    while m < num:
      m += 1
      stack.append(m)
      answer += '+\n'
    stack.pop()
    answer += '-\n'
  else:
    if stack[-1] != num:
      print('NO')
      sys.exit(0)
    stack.pop()
    answer += '-\n'
print(answer)