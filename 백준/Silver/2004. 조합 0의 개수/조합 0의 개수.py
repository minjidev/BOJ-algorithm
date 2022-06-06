import sys
n, m = map(int, sys.stdin.readline().split())

# 2, 5의 개수 세서 더 적은 값 출력
# n! - (n-m)! - m!

# 개수 세기
def n_cnt(n, d):
  ans = 0
  i = d
  while i <= n:
    ans += n//i
    i *= d
  return ans

two = n_cnt(n, 2) - n_cnt(n-m, 2) - n_cnt(m, 2)
five = n_cnt(n, 5) - n_cnt(n-m, 5) - n_cnt(m, 5)
print(min(two, five))