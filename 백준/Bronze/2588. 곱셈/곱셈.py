a = int(input())
b = input()

three = a * int(b[2]) 
four = a * int(b[1]) 
five = a * int(b[0]) 
six = three + four * 10 + five * 100
print(three, four, five, six, sep='\n')