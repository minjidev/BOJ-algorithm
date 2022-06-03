import sys
s = sys.stdin.readline().rstrip()
for i in range(26):
    ch = chr(i+ord('a'))
    print(s.count(ch), end=' ')
