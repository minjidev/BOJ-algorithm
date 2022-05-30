import sys

def valid(l):
  stack = []
  for cha in line:
    if cha == '[' or cha == '(':
      stack.append(cha)
    elif cha == ')':
      if stack and stack[-1] == '(':
        stack.pop()
      else:
        return 'no'
    elif cha == ']':
      if stack and stack[-1] == '[':
        stack.pop()
      else:
        return 'no' 
  if not stack:
    return 'yes'
  else:
    return 'no'
      
      
while True:
  line = sys.stdin.readline().rstrip()
  if line == '.':
    break
  print(valid(line))