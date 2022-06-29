n = int(input())
len = 1
start = 1
ans = 0
while  start <= n: # n의 자릿수까지만 검사 
  end = start*10-1
  if end > n: # n이 해당 자릿수 마지막 값보다 작은 경우 
    end = n # 끝 수는 n
  ans += len*(end-start+1) # 자릿수 * 개수 
  len += 1 # 자릿수 1씩 증가
  start *= 10 # 10 제곱수마다 검사(자릿수 증가) 
print(ans)