n = int(input())
counter = 0

for i in range(n):
  word = input()
  cha_lst = []  
  for cha in word:
    if cha in cha_lst and previous_cha != cha:
      break
    cha_lst.append(cha)
    previous_cha = cha
    if len(cha_lst) == len(word):
      counter += 1

print(counter)