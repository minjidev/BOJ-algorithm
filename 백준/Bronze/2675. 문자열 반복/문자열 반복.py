n = int(input())
new_str = ''

for i in range(n):
  lst = list(input().split())
  new_str = ''

  for j in lst[1]:
    new_str += j * int(lst[0])
  
  print(new_str)