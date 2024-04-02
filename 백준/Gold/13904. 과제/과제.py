import heapq

n = int(input())
problems = [list(map(int, input().split())) for _ in range(n)]
q = []


problems.sort()

for d, w in problems:
    heapq.heappush(q, w)

    if len(q) > d:
        heapq.heappop(q)

print(sum(q))