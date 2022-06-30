import sys 
input = sys.stdin.readline
n,m = map(int, input().split())
n_list = list(map(int, input().split()))
n_list.sort()

arr = [0] * m
c = [False] * n
def p(index, n, m):
  if index == m:
    print(*arr)
    return

  for i in range(n):
    if c[i]: 
      continue
    c[i] = True # 사용되었음
    arr[index] = n_list[i]
    p(index+1, n, m)
    c[i] = False

p(0, n, m)