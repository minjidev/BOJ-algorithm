const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "prac.txt";
const year = fs.readFileSync(filePath).toString().trim();

const isLeapYear = (year) => {
  return +((!(year % 4) && !!(year % 100)) || !(year % 400));
};

console.log(isLeapYear(year));
