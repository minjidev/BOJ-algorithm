import sys
input = sys.stdin.readline
heights = [int(input()) for i in range(9)]
h_sum = sum(heights)
one = two = 0
for i in range(9):
  for j in range(i+1, 9):
    if h_sum - (heights[i] + heights[j]) == 100:
      one, two = heights[i], heights[j]
      break

heights.remove(one)
heights.remove(two)

print(*sorted(heights), sep="\n")