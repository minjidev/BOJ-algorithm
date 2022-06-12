import sys
input = sys.stdin.readline
t = int(input())
price = [0]+[list(map(int, input().split())) for i in range(t)]
d = [[0]*3 for _ in range(t+1)] 
for i in range(3):
  d[1][i]=price[1][i]

for i in range(2, t+1):
  d[i][0]= min(d[i-1][1], d[i-1][2])+price[i][0]
  d[i][1] = min(d[i-1][0], d[i-1][2]) + price[i][1]
  d[i][2] = min(d[i-1][0], d[i-1][1]) + price[i][2]

print(min(d[t]))