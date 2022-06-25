E, S, M = map(int, input().split())
e=s=m=y=0

while True:
  e += 1
  s += 1
  m += 1
  y += 1

  if e == E and s == S and m == M:
    print(y)
    break

  if e == 15:
    e = 0
  if s == 28:
    s = 0
  if m == 19:
    m = 0