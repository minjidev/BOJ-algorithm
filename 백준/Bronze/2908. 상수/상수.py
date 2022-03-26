a, b = input().split()
result = a[::-1] if int(a[::-1]) > int(b[::-1]) else b[::-1]
print(result)