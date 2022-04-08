def p(n):
  n+=1
  arr= [True] * n
  for i in range(2, int(n**0.5)+1):
    if arr[i]:
      for j in range(2*i, n, i):
        arr[j] = False
  p_result = []
  for x in range(2, n):
    if arr[x]: p_result.append(x)
  return p_result
                              
t = int(input())
for _ in range(t):
  n = int(input())
  p_result = p(n)
  half = n//2
  for x in range(half, 1, -1):
    if (n-x in p_result) and (x in p_result):
      print(x, n-x)
      break