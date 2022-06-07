import sys
n = int(sys.stdin.readline())
d = [0] * (n+1)
d[1] = 0

for i in range(2, n+1):
  # 1을 빼는 경우
  d[i] = d[i-1] + 1
  # 2의 배수인 경우
  if i%2==0 and d[i]>d[i//2]+1:
    d[i] = d[i//2]+1
  # 3의 배수인 경우
  if i%3==0 and d[i]>d[i//3]+1:
    d[i] = d[i//3]+1


print(d[n])