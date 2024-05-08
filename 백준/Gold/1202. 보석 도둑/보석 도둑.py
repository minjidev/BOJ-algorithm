# 상덕이가 훔칠 수 있는 보석 가격 합의 최댓값
# 보석, 가방 오름차순해 가벼운 보석부터 가방에 담을 수 있는만큼 담기

import heapq

n, k = map(int, input().split())
gems = [list(map(int, input().split())) for _ in range(n)]
bags = [int(input()) for _ in range(k)]
q = []
result = 0


gems.sort()
bags.sort()


for bag in bags: 
    # 가방에 담을 수 있으면
    while gems and gems[0][0] <= bag:
        heapq.heappush(q, -gems[0][1]) # 보석 가격 최대힙에 담고
        heapq.heappop(gems) # 최소 무게 보석 빼기

    if q:
        result -= heapq.heappop(q) # 최대 가격 더하기  

print(result)