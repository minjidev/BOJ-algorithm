dial_num = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

data = input()
result = 0
for i in data:
  for num in dial_num:
    if i in num:
      result += dial_num.index(num) + 3
print(result)
