n,x = map(int, input().split())
a = map(int, input().split())
lst = []
for i in a:
  if i < x:
    lst.append(str(i))

print(' '.join(lst))
