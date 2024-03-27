import heapq

n = int(input())
tasks = [list(map(int, input().split())) for _ in range(n)]

solved = []
result = 0

tasks.sort() # 마감일 기준 오름차순 정렬
end = tasks[-1][0] # 마지막 마감일

# 마지막 마감일부터 보면서 해당 일자에 가능한 과제 중 최대 점수 찾기
for day in range(end, 0, -1):
    # 현재 일자보다 마감일이 많이 남은 경우(가능한 과제)
    while tasks and tasks[-1][0] >= day:
        heapq.heappush(solved, -tasks[-1][1])
        tasks.pop()

    # 가능한 과제 중 최대 점수인 과제 풀기
    if solved:
        result -= heapq.heappop(solved)

print(result)