function solution(s) {
  const regexr = /^\d{4}$|^\d{6}$/;
  return regexr.test(s);
}