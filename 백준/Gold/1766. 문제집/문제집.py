import heapq

n, m = map(int, input().split())
answer = []
graph = [[] for _ in range(n+1)] # 위상정렬 그래프
inDegree = [0 for _ in range(n+1)] # 진입차수
heap = [] # 우선순위 큐

for i in range(m):
    s, e = map(int, input().split())
    graph[s].append(e)
    inDegree[e] += 1
    
# 진입 차수가 0이라면(선수 문제가 없다면) 바로 최소힙에 넣기
for i in range(1, n+1):
    if inDegree[i] == 0:
        heapq.heappush(heap, i)

while heap:
    current = heapq.heappop(heap)
    answer.append(current)

    for node in graph[current]:
        inDegree[node] -= 1 # 진입 차수 감소(선수 문제 풀고)
        if inDegree[node] == 0: # 진입 차수가 0이라면(더 이상 선수 문제가 없다면)
            heapq.heappush(heap, node)

print(' '.join(map(str, answer)))
        
