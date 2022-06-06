import sys
n = int(sys.stdin.readline())
# 인수 중 가장 큰 값은 √n 
for i in range(2, int(n**0.5)+1):
  while n%i==0:
    n //= i
    print(i)
# 남는 몫 출력 
if n > 1:
    print(n)