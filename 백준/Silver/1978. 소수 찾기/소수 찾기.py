import sys 

def prime(n):
  if n<2:
    return 0
  for i in range(2, int(n**0.5)+1):
    if n%i == 0:
      return 0
  return 1
  
input = sys.stdin.readline
n = input()
num_list = [int(i) for i in input().split()]
ans  = 0
for num in num_list:
  ans += prime(num)
  
print(ans)