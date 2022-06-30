import sys 
n,m = map(int, sys.stdin.readline().split())
arr = [0] * m


def p(index, start, n, m):
  if index == m:
    print(*arr)
    return

  for i in range(start, n+1):
    arr[index] = i
    p(index+1, i, n, m)

p(0, 1, n, m)