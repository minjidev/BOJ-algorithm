# 작은 수부터 차례대로 더해나간다.
import heapq

n = int(input())
lectures = [list(map(int, input().split())) for _ in range(n)] # [시작, 종료]
room = [] # 회의실 종료 시간 저장할 우선순위큐
answer = 0

# 회의 시작 시간 기준 오름차순 정렬
lectures.sort(key=lambda x :(x[0], x[1]))
heapq.heappush(room, lectures[0][1])

for i in range(1, n):
    [start, end] = lectures[i]
    # 다음 회의 시작 시간이 현재 강의 종료 시간보다 이전이면 새 회의실 개설 
    if start < room[0]: 
        heapq.heappush(room, end)
    # 아니라면 종료 시간 갱신
    else:
        heapq.heappop(room)
        heapq.heappush(room, end)
        
print(len(room))