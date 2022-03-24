word = input()
alphabets = list(range(ord('a'), ord('z')+1))

for i in alphabets:
  print(word.find(chr(i)))