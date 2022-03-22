input()
data = list(map(int, input().split()))
max_val = max(data)
new_data = [s/max_val*100 for s in data]

new_average = sum(new_data)/len(new_data)
print(new_average)
