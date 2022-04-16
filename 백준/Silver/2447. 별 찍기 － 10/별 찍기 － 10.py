def draw(n):
  if n==1:
    return ['*']

  stars=draw(n//3)
  lst=[]

  for star in stars:
    lst.append(star*3)
  for star in stars:
    lst.append(star+' '*(n//3)+star)
  for star in stars:
    lst.append(star*3)

  return lst

n=int(input())
print('\n'.join(draw(n)))