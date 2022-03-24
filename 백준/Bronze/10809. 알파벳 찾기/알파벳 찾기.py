word = input()
alphabets = list(range(97, 123))

for i in alphabets:
  print(word.find(chr(i)))