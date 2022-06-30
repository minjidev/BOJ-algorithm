import sys 
n,m = map(int, sys.stdin.readline().split())
arr = [0] * m


def p_asc(num, selected, n, m): # 자연수, 선택한 수의 개수
  if selected == m:
    print(*arr)
    return
  if num>n:
    return

  arr[selected] = num # 해당 수 포함하는 경우 
  p_asc(num+1, selected+1, n, m)
  arr[selected] = 0 # 해당 수 포함하지 않는 경우 
  p_asc(num+1, selected, n, m)

p_asc(1, 0, n, m)