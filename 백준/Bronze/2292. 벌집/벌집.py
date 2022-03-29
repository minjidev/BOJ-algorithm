n = int(input())
counter = 1
bee_house = 1
while n > bee_house:
  bee_house += 6 * counter
  counter += 1
print(counter)
