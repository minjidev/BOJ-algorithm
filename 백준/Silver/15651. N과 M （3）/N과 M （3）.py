import sys 
n,m = map(int, sys.stdin.readline().split())
arr = [0] * m


def p(index, n, m):
  if index == m:
    print(*arr)
    return

  for i in range(1, n+1):
    arr[index] = i
    p(index+1, n, m)

p(0, n, m)
