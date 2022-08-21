n, m = map(int, input().split())
a = list(map(int, input().split()))

lt=cnt=0
rt=1
sum = a[0]

while True:
  if sum<m:
    if rt<n:
      sum += a[rt]
      rt += 1
    else:
      break
  elif sum==m:
    cnt += 1
    sum -= a[lt]
    lt += 1

  else:
    sum -= a[lt]
    lt += 1
    
print(cnt)