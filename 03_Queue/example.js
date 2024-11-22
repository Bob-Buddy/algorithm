const { testSolution, validateAndRunTest } = require("../utils");

// 1번
const ex1_1 = [5, 2];
const answer1_1 = 3;

const testEx1 = (solution) => {
  testSolution([ex1_1], [answer1_1], solution);
};

// 2번
const ex2_1 = [
  [93, 30, 55],
  [1, 30, 5],
];
const ex2_2 = [
  [95, 90, 99, 99, 80, 99],
  [1, 1, 1, 1, 1, 1],
];
const answer2_1 = [2, 1];
const answer2_2 = [1, 3, 2];

const testEx2 = (solution) => {
  testSolution([ex2_1, ex2_2], [answer2_1, answer2_2], solution);
};

// 3번
const ex3_1 = [
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"],
];
const ex3_2 = [
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"],
];
const answer3_1 = "Yes";
const answer3_2 = "No";

const testEx3 = (solution) => {
  testSolution([ex3_1, ex3_2], [answer3_1, answer3_2], solution);
};

const testFunctions = [testEx1, testEx2, testEx3];
const testEx = (num, solution) => {
  validateAndRunTest(num, testFunctions, solution);
};

module.exports = {
  testEx,
};
