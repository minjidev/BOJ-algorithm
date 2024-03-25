import sys
import heapq
input = sys.stdin.readline
n, k = map(int, input().split())
gems = [list(map(int, input().split())) for _ in range(n)]
bags = [int(input()) for _ in range(k)]
gems.sort()
bags.sort()
result = 0
values = [] # 보석 가격 저장 리스트 

for bag in bags:
    while gems and gems[0][0] <= bag: # 가방에 넣을 수 있으면 
        heapq.heappush(values, -gems[0][1]) # 최대힙에 저장 
        heapq.heappop(gems)
    if values: 
        result -= heapq.heappop(values) # 최대 가격 가져와서 더하기 

print(result)