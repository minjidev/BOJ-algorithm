import sys
input = sys.stdin.readline
h = [int(input()) for _ in range(9)]
total = sum(h)
one = two = 0
for i in range(9):
  for j in range(i+1, 9):
    if total - (h[i]+h[j]) == 100:
      one, two = h[i], h[j]
h.remove(one)
h.remove(two)

print(*h, sep='\n')