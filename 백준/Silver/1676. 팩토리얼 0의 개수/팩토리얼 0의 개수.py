import sys
def five_count(n):
  cnt = 0
  while n != 0:
    # 5 개수만큼 나누기
    n //= 5
    # 5로 나눈 몫은 0의 개수
    cnt += n
  return cnt

n = int(sys.stdin.readline())
print(five_count(n))