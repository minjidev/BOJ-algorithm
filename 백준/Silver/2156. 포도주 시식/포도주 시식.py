import sys
input = sys.stdin.readline
n = int(input())
wine = [0]+[int(input()) for _ in range(n)]
d = [0] * (n+1)
d[1]=wine[1]    # 1잔 있는 경우 다 마시는 게 최댓값
if n>=2:
  d[2]=wine[1]+wine[2]  # 2잔 이상인 경우, 2잔 있으면 다 마시는 게 최댓값

for i in range(3, n+1):
  d[i] = d[i-1]    # i번째 잔 마시지 않는 경우
  d[i] = max(d[i], d[i-2]+wine[i])  # i-2, i번째 마신 경우
  d[i] = max(d[i], d[i-3]+wine[i-1]+wine[i])  # i-3, i-1, i번째 마신 경우 
  
print(d[n])