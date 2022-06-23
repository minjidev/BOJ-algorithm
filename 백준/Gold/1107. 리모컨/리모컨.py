import sys
input = sys.stdin.readline
target = int(input())
m = int(input())
if m:
  broken = input().split()
else:
  broken = []
ans = abs(100-target) # +, -만 누르는 경우 
for i in range(1000001): # 가능한 채널
  for num in str(i):
    if num in broken: # 번호가 부서진 경우(채널 번호에서 하나라도 부서져있으면 break)
      break 
    # 번호 누를 수 있는 경우 
    # +,-만 누른 경우 vs. (누른 번호 갯수와 n에 도달하기 위해 +, - 눌러야하는 횟수) 
  else:   
    ans = min(ans, len(str(i))+abs(i-target))  

print(ans)
  
  