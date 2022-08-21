n  = int(input())
a = list(map(int, input().split()))
x = int(input())

cnt = 0
dic = {}
for i in range(n):
  other = x-a[i]
  if other in dic:
    cnt += 1
  else:
    dic[a[i]]=i

print(cnt)