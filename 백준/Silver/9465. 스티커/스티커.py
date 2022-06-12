import sys
input = sys.stdin.readline
t = int(input())
for i in range(t):
  n  = int(input())
  l1 = list(map(int, input().split()))
  l2 = list(map(int, input().split()))
  points = list(zip(l1,l2))

  d= [[0]*3 for _ in range(n+1)]


  for i in range(1, n+1):
    # 스티커 떼지 않는 경우
    d[i][0] = max(d[i-1])
    # 위 스티커 떼는 경우
    d[i][1] = max(d[i-1][0], d[i-1][2]) + points[i-1][0]
    # 아래 스티커 떼기
    d[i][2] = max(d[i-1][0], d[i-1][1]) + points[i-1][1]
  
  print(max(d[n]))