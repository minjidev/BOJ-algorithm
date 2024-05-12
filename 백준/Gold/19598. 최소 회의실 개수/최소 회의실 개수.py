# 회의실의 종료 시간보다 현재 회의실 시작 시간이 빠르면 새로 개설하고, 아니면 계속 사용 
import heapq

n = int(input())
meetings = [list(map(int, input().split())) for _ in range(n)]
rooms = [] # 회의 종료 시간 우선순위큐

# 시작 시간 기준 오름차순 정렬
meetings.sort(key=lambda x: (x[0], x[1]))

heapq.heappush(rooms, meetings[0][1])

for i in range(1, n):
  if meetings[i][0] < rooms[0]:
    # 시작 시간이 현재 회의실 종료시간보다 더 빠르면 새로운 회의실 개설 
    heapq.heappush(rooms, meetings[i][1])
  else:
    # 아니라면 계속 이어서 진행
    heapq.heappop(rooms)
    heapq.heappush(rooms, meetings[i][1])

print(len(rooms))
