import sys
n = int(sys.stdin.readline())

for i in range(n):
  count = 0
  result = list(map(int, sys.stdin.readline().split()))
  avg_score = sum(result[1:])/(len(result)-1)
  for s in result[1:]:
    if s > avg_score:
      count += 1
  rate = count/(len(result)-1)*100
  print(f"{rate:.3f}%")
