import sys 
def valid(l):
  stack = []
  for ch in l:
    if ch == '(':
      stack.append(ch)
    else:
      if stack:
        stack.pop()
      else:
        if ch == ')':
          return "NO" 
  if stack:
    return "NO"
  else:
    return "YES"

t = int(sys.stdin.readline())
for _ in range(t):
  line = sys.stdin.readline().strip()
  print(valid(line))
  
      
  