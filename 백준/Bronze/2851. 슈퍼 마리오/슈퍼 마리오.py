import sys
input = sys.stdin.readline
mushrooms = [int(input()) for i in range(10)]
mush_sum = [sum(mushrooms[:i+1]) for i in range(10)]
ans = 0

if mush_sum[-1] < 100: # 합이 100미만이면 전체 합이 정답
  ans = mush_sum[-1]
  
for i in range(10):
  if mush_sum[i] == 100: # 합이 100이면 반복문 탈출
    ans = mush_sum[i]
    break
  elif mush_sum[i] > 100:
    # 100이하 값이 더 가까울 때 
    if abs(100-mush_sum[i-1])<abs(100-mush_sum[i]): 
      ans = mush_sum[i-1]
    else:
      ans = mush_sum[i]
    break

print(ans)