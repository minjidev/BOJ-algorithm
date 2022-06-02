import sys
input = sys.stdin.readline
n = int(input())
pst_fix = input().rstrip()
num_list = [int(input()) for _ in range(n)]
stack = []
A = ord('A')
Z = ord('Z')

for ch in pst_fix:
  if ch.isalpha():
    stack.append(num_list[ord(ch)-A])
  else:
    b = stack.pop()
    a = stack.pop()
    stack.append(eval(str(a)+ch+str(b)))

print(f'{stack[0]:.2f}')