import sys
from collections import deque

n, m = list(map(int, sys.stdin.readline().split()))
graph = [[0 for x in range(m)] for x in range(n)]
for i in range(n):
    temp = sys.stdin.readline()
    for j in range(m):
        graph[i][j]= int(temp[j])
visit = [[[False, False] for x in range(1002)] for x in range(1002)]

def bfs():
    queue = deque([(0, 0, 0, 0)]) # x, y, break 횟수, dist
    visit[0][0][0] = True
    visit[0][0][1] = True
    while(queue):
        x, y, breakable, dist = queue.popleft()
        if x == n-1 and y ==m-1:
            print(dist+1)
            return

        adj_list = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]
        for point in adj_list:
            nx, ny = point
            if nx >=0 and nx<n and ny>=0 and ny<m and visit[nx][ny][breakable] == False:
                if graph[nx][ny] == 0:
                    visit[nx][ny][breakable] = True
                    queue.append((nx, ny, breakable, dist +1))
                else:
                    if breakable == 0:
                        visit[nx][ny][breakable] = True
                        queue.append((nx, ny, 1, dist+1))


    print(-1)


bfs()