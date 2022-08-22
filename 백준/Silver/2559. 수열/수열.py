n, k = map(int, input().split())
temp = list(map(int, input().split()))

# 첫 번째 k일 온도의 합
cur = sum(temp[:k])
largest = cur
# 연속된 온도의 합 = 이전 합 + 다음 K번째 온도 - 이전합 첫 번째 온도
for i in range(1, n-k+1):
  cur = cur + temp[i+k-1] - temp[i-1]
  if largest<cur:
    largest = cur

print(largest)