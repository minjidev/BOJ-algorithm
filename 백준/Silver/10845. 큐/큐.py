import sys
t = int(sys.stdin.readline())
queue = [0] * t
begin = 0
end = 0
for _ in range(t):
  cmds = sys.stdin.readline().strip().split()
  cmd = cmds[0]
  if cmd == 'push':
    queue[end] = cmds[1]
    end += 1
  elif cmd == 'pop':
    # if it's empty
    if begin == end:
      print(-1)
    else:
      print(queue[begin])
      begin += 1
  elif cmd == 'size':
    print(end-begin)
  elif cmd == 'empty':
    print(1) if begin==end else print(0)
  elif cmd == 'front':
    if begin == end:
      print(-1)
    else:
      print(queue[begin])
  elif cmd == 'back':
    if begin == end:
      print(-1)
    else:
      print(queue[end-1])
    
  