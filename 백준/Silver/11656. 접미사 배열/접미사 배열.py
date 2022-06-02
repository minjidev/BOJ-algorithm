import sys
s = sys.stdin.readline().rstrip()
ans = []
for _ in enumerate(s):
  ans.append(s)
  s = s[1:]

print(*sorted(ans), sep='\n')