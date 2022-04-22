data = input()
lst = [i for i in data]
lst.sort(reverse=True)
print(''.join(lst))