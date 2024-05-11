# 작은 수부터 차례대로 더해나간다.
import heapq

n = int(input())
cards = [int(input()) for _ in range(n)]
answer = 0

heapq.heapify(cards)


for i in range(n-1):
    prev = heapq.heappop(cards)
    cur = heapq.heappop(cards)
    answer += prev + cur

    # 최소힙에 다시 더한 카드묶음 넣기 
    heapq.heappush(cards, prev + cur)

print(answer)


