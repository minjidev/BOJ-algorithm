function solution(n) {
  var arr = [];
  do {
    arr.push(n % 10); //일의 자리부터 새로운 배열에 push
    n = parseInt(n / 10);
  } while (n > 0);
  return arr;
}
