function solution(name) {
  let answer = 0;
  let moves = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let target = name.charCodeAt(i);
    answer += Math.min(target - "A".charCodeAt(), "Z".charCodeAt() - target + 1);

    let index = i + 1;
    while (index < name.length && name[index] === "A") index++;

    moves = Math.min(moves, i * 2 + name.length - index); // A를 만나면 돌아가는 방법
    moves = Math.min(moves, (name.length - index) * 2 + i); // 뒤로 갔다오는 방법
  }
  return answer + moves;
}