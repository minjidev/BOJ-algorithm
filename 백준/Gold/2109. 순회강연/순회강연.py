import heapq 

n = int(input())
courses = [list(map(int, input().split())) for _ in range(n)]

# n==0인 경우
if n== 0:
    print(0)
    exit(0)

# 일자 기준 오름차순
courses.sort(key=lambda x:x[1])
end = courses[-1][1] # 마지막 날짜
earnings = []
result = 0

for day in range(end, 0, -1):
    while courses and day <= courses[-1][1]:
        heapq.heappush(earnings, -courses[-1][0])
        courses.pop()
        

    if earnings:
        result -= heapq.heappop(earnings)
        
        
print(result)