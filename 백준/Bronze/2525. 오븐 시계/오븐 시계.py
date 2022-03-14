h, m = map(int, input().split())
t = int(input())

final = h * 60 + m + t
print(final//60%24, final%60)
