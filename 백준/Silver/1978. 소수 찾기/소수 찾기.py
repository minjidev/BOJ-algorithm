import sys
n = int(sys.stdin.readline())
num_list = list(map(int, sys.stdin.readline().split()))
p_cnt = 0

for num in num_list:
  if num > 1: 
    cnt = 0
    for j in range(2, num):
      if num%j == 0:
        cnt += 1
    if cnt == 0:
      p_cnt += 1
      

print(p_cnt)