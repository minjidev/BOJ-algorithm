i = int(input()) 
temp = i
count = 0
while 1:
  a = i // 10 
  b = i % 10  
  c = (a+b)%10  
  i = (b*10) + c
  count += 1
  if(temp == i):
    break
print(count)