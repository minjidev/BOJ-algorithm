import sys
input = sys.stdin.readline

def check(arr):
  ans = 0
  n = len(arr)
  for i in range(n): # 전체 판을 확인
    # 열 순회하면서 연속되는 숫자 세기
    cnt = 1
    for j in range(1, n):
      if arr[i][j] == arr[i][j-1]: #이전과 색이 같다면 1 더하기
        cnt += 1
      else: # 아니라면 1로 초기화
        cnt = 1

      if cnt > ans: # 현재 cnt가 더 큰 경우 ans 갱신
        ans = cnt # 열의 최고 연속 숫자 길이
        

    #행 순회하면서 연속되는 숫자 세기
    cnt = 1
    for j in range(1, n):
      if arr[j][i] == arr[j-1][i]:
        cnt += 1
      else:
        cnt =1

      if cnt > ans:
        ans = cnt
  return ans


n = int(input())
board = [list(input().rstrip()) for i in range(n)]
ans = 0

for i in range(n):
  for j in range(n):
    # 열 바꾸기 
    if j+1 < n: 
      board[i][j], board[i][j+1] = board[i][j+1], board[i][j] # 인접한 열(오른쪽) 교환 
      tmp = check(board) # 교환 시 가장 긴 연속한 부분
      if tmp > ans: # 더 긴 경우 갱신 
        ans = tmp

      board[i][j], board[i][j+1] = board[i][j+1], board[i][j] # 원래대로 돌려놓기
        
    # 행 바꾸기
    if i+1 < n:
      board[i][j], board[i+1][j] = board[i+1][j], board[i][j] # 인접한 행(아래)과 바꾸기 
      tmp = check(board)
      if tmp > ans: 
        ans = tmp

      board[i][j], board[i+1][j] = board[i+1][j], board[i][j] # 원래대로 돌려놓기

print(ans) # 연속한 가장 긴 부분 출력