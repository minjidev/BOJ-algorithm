import heapq

n = int(input())
tasks = [list(map(int, input().split())) for _ in range(n)]

# 데드라인 오름차순 정렬
tasks.sort()
ramyeons = []

for d, p in tasks:
    heapq.heappush(ramyeons, p)

    if len(ramyeons) > d:
        heapq.heappop(ramyeons)

print(sum(ramyeons))