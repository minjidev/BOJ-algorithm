import sys
s = sys.stdin.readline()
asc = ord('a')
ans = []
for ch in range(26):
  ans.append(s.count(chr(asc)))
  asc += 1

print(*ans)
  