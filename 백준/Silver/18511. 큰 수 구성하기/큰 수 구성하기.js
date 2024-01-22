const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(nums.split(" ")[0]);
const set = arr.split(" ").map(Number);
set.sort((a, b) => a - b);
let max = 0;

function DFS(sum) {
  if (sum > N) return;

  for (let num of set) {
    if (max < sum) max = sum;
    DFS(10 * sum + num);
  }
}

DFS(0);
console.log(max);
