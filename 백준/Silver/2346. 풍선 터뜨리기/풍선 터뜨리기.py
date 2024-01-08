n = int(input())
idx = 0
result = []

balloons = list(map(int, input().split())) # 풍선배열
index = [x for x in range(1, n+1)] # index 배열 

temp = balloons.pop(idx)
result.append(index.pop(idx))

while balloons:
    if temp < 0:
        idx = (idx + temp) % len(balloons)
    else: 
        idx = (idx + temp - 1) % len(balloons)
    temp = balloons.pop(idx)
    result.append(index.pop(idx))

for r in result:
    print(r, end=' ')
