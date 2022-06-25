import sys
input = sys.stdin.readline
mushrooms = [int(input()) for i in range(10)]
mush_sum = [sum(mushrooms[:i+1]) for i in range(10)]

diff, min_idx = 100, 0

for i in range(10):
  if abs(100-mush_sum[i]) <= diff: # 100과 더 가깝거나 같은 값인 경우
    diff = abs(100-mush_sum[i]) # 100과 가장 작은 차이 저장
    min_idx = i # 100과 가장 차이가 작게 나는 index 저장
  else:
    break

print(mush_sum[min_idx]) # 100과 차이가 가장 작을 때 합계값 출력