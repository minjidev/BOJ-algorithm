def p(n):
  if n <= 1:
    return n
  result = p(n-2) + p(n-1)
  return result 

n = int(input())
print(p(n))