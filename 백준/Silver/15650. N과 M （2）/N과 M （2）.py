import sys 
n,m = map(int, sys.stdin.readline().split())
arr = [0] * m

def p_asc(index, start, n, m):
  if index == m:
    print(*arr)
    return 

  for i in range(start, n+1):  
    arr[index] = i # index자리에 i(start~N)
    p_asc(index+1, i+1, n, m) # index+1 자리에는 i+1부터 가능 

p_asc(0, 1, n, m)


