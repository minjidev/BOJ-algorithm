import sys 
s = sys.stdin.readline().rstrip()
asn = []
asc = ord('a')

for _ in range(26):
  char = chr(asc)
  if char in s:
    asn.append(s.index(char))
  else:
    asn.append(-1)
  asc += 1

print(*asn)