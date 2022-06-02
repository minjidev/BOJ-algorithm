import sys
s = sys.stdin.readline().rstrip()
ans = []
for _ in range(len(s)):
  ans.append(s)
  s = s[1:]

print(*sorted(ans), sep='\n')