c_str = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
data = input()

for c in c_str:
  data = data.replace(c, "#")
print(len(data))