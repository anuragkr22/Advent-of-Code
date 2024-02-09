const rev = (str) => {
  return str.split("").reverse().join("");
};

const str = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
]
  .join("|")
  .split("")
  .join("");
const regex = new RegExp(str);
const regexRev = new RegExp(rev(str));

const digitMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const isNumber = (value) => {
  if (value === "\r") return false;
  return !isNaN(value);
};

const partOne = (input) => {
  const lines = input.trim().split("\n");
  const values = lines.map((line) => {
    let first = line.split("").find((val) => isNumber(val));
    let last = line.split("").findLast((val) => isNumber(val));
    return Number(first + last);
  });

  const result = values.reduce((sum, val) => sum + val);
  return result;
};

const partTwo = (input) => {
  const lines = input.trim().split("\n");
  const values = lines.map((line) => {
    let str1 = line;
    let str2 = rev(line);
    let firstWord = line.match(regex);
    if (firstWord) {
      str1 = str1.replace(firstWord, digitMap[firstWord[0]]);
    }
    let lastWord = rev(line).match(regexRev);
    if (lastWord) {
      str2 = str2.replace(lastWord, digitMap[rev(lastWord[0])]);
    }
    console.log(str1);
    console.log(str2.split(""));
    console.log("------------");
    let first = str1.split("").find((val) => isNumber(val));
    let last = str2.split("").find((val) => isNumber(val));
    return Number(first + last);
  });

  console.log(values);

  const result = values.reduce((sum, val) => sum + val);
  return result;
  F;
};

const fs = require("node:fs");
const filePath = "D:/advent-of-code/2023/day1/input_day1.txt";

fs.readFile(filePath, "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(partTwo(input));
});
