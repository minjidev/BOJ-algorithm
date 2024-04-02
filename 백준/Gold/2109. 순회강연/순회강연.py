import heapq

n = int(input())
courses = [list(map(int, input().split())) for _ in range(n)]
result = 0

courses.sort(key=lambda x:x[1])
q = []

for p, d in courses:
    heapq.heappush(q, p)

    if len(q) > d:
        heapq.heappop(q)
    
print(sum(q))