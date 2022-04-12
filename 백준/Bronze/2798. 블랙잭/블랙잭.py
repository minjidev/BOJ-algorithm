n, m = map(int, input().split())
card_lst = list(map(int, input().split()))
sum = 0

for i in range(n):
  for j in range(i+1, n):
    for k in range(j+1, n):
      if card_lst[i]+card_lst[j]+card_lst[k] > m:
        continue
      else:
        sum = max(sum, card_lst[i]+card_lst[j]+card_lst[k])
print(sum)