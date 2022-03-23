n = int(input())

counter = 0
for i in range(1, n+1):
  lst = list(map(int, str(i)))
  if i < 100:
    counter += 1 
  elif lst[0]-lst[1] == lst[1]-lst[2]:
    counter += 1
print(counter)