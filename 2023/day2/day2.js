const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

const partOne = (input) => {
  const lines = input.trim().split("\n");
  const passFail = lines.map((line) => {
    const sets = line
      .split(": ")[1]
      .split("; ")
      .map((set) => {
        const grabs = set.split(", ");
        return grabs.every((grab) => {
          const [count, color] = grab.split(" ");
          return maxCount[color] >= Number(count);
        });
      });

    const result = sets.every((item) => item);
    return result;
  });

  return passFail.reduce((sum, value, ind) => {
    return value ? sum + ind + 1 : sum;
  }, 0);
};

const partTwo = (input) => {
  const lines = input.trim().split("\n");
  const powerOfSetOfCubes = lines.map((line) => {
    const maxRGB = {
      red: 0,
      green: 0,
      blue: 0,
    };
    line
      .split(": ")[1]
      .split("; ")
      .forEach((set) => {
        const grabs = set.split(", ");
        grabs.forEach((grab) => {
          const [count, color] = grab.split(" ");
          maxRGB[color] = Math.max(maxRGB[color], count);
        });
      });

    const power = maxRGB["red"] * maxRGB["green"] * maxRGB["blue"];
    return power;
  });

  return powerOfSetOfCubes.reduce((sum, value) => {
    return sum + value;
  }, 0);
};

/* ================ INPUT ================================================================== */
const fs = require("node:fs");
const filePath = "D:/advent-of-code/2023/day2/input.txt";

const input = fs.readFileSync(filePath, "utf8");
console.log(partTwo(input));
