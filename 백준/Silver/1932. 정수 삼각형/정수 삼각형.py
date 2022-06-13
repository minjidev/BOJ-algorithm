import sys
input = sys.stdin.readline
n = int(input())
tri = [list(map(int, input().split())) for _ in range(n)]

d = [0]+[[0]*(n+1) for _ in range(n+1)]

d[1][1] = tri[0][0]
for i in range(2, n+1):
  for j in range(1, i+1):
    # 이전 줄 최댓값 + 현재 값
    d[i][j] = max(d[i-1][j-1], d[i-1][j]) + tri[i-1][j-1]

# 현재 값의 최댓값 
print(max(d[n]))