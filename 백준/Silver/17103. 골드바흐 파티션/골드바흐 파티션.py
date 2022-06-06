import sys
input = sys.stdin.readline
t = int(input())
num_lst =[int(input()) for i in range(t)]
m = max(num_lst)
check = [False, False] + [True]*(m-1)

# 입력 숫자 중 최대숫자까지 소수 구하기
for i in range(2, int(m**0.5)+1):
  if check[i]:
    for j in range(2*i, m+1, i):
      check[j] = False

for num in num_lst:
  cnt = 0
  # 순서만 다른 것은 포함 X
  for i in range((num//2)+1):
    if check[i] and check[num-i]:
      cnt += 1
  print(cnt)