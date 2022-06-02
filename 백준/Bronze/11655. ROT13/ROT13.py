s = input()
ans = []
for ch in s:
  if ch.isupper():
    asc_up = ord(ch)
    rot = chr(asc_up+13) if asc_up<ord('A')+13 else  chr(asc_up-13) 
    ans.append(rot)
  elif ch.islower():
    asc_lo = ord(ch)
    rot = chr(asc_lo+13) if asc_lo<ord('a')+13 else chr(asc_lo-13)
    ans.append(rot)
  
  else:
    ans.append(ch)
print(''.join(ans))
