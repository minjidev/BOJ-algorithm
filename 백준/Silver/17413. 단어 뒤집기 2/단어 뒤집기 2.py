import sys

stk = []
ans = ''
tag = False
l = sys.stdin.readline()
for ch in l:
  # tag 시작
  if ch == '<':
    if stk:
      ans += ''.join(stk[::-1])
      stk.clear()
    tag = True
    ans += ch
  # tag 끝
  elif ch == '>':
    tag = False
    ans += ch
  # tag 안
  elif tag:
    ans += ch
  # tag 아닐 때

  else:
    if ch == ' ' or ch == l[-1]:
      ans += ''.join(stk[::-1])
      stk.clear()
      ans += ' '
    else:
      stk.append(ch)

print(ans)