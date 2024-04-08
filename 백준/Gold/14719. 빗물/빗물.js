const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [H, W] = nums.split(" ").map(Number);
const world = arr.split(" ").map(Number);

let total = 0;
for (let i = 1; i < W - 1; i++) {
  const leftMax = Math.max(...world.slice(0, i));
  const rightMax = Math.max(...world.slice(i + 1));

  const minH = Math.min(leftMax, rightMax);

  if (world[i] < minH) {
    total += minH - world[i];
  }
}

console.log(total);
