import sys
n, m = map(int, sys.stdin.readline().split())
check = [False] * (n+1)
arr=[0] * m

def p(index, n, m):
  if index == m:
    print(*arr)
    return
    
  for i in range(1, n+1):
    if check[i] : 
      continue # 중복 체크
    check[i] = True 
    arr[index] = i # index자리에 i 추가 
    p(index+1, n, m) # 다음 index에 올 숫자 구하기
    check[i] = False # 다시 이 숫자 사용할 수 있도록 False 처리
    
# n개 자연수 중 m개 선택한 수열 
p(0, n, m)

    
