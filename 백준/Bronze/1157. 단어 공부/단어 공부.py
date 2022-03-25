data = input().upper()
word_list = list(set(data))

count_lst = []
for i in word_list:
  count_lst.append(data.count(i))

if count_lst.count(max(count_lst)) > 1:
  print('?')
else:
  print(word_list[count_lst.index(max(count_lst))])