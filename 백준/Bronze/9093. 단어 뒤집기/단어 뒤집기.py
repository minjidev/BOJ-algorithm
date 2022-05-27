import sys
# get the number of TC
n = int(sys.stdin.readline())
for _ in range(n):
  s = sys.stdin.readline()
  stack = []
  for cha in s:
    # if whitespace, reverse the word stack and add the whitespace
    if cha == ' ' or cha == '\n':
      print(''.join(stack[::-1]), end='')
      stack.clear()
      print(cha, end='')
    # save a word
    else:
      stack += cha

  print(''.join(stack), end='')