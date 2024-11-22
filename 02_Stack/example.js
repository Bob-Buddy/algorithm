const { testSolution, validateAndRunTest } = require("../utils");

// 1번
const ex1_1 = ["(())()"];
const ex1_2 = ["((())()"];
const answer1_1 = true;
const answer1_2 = false; // Boolean의 경우 string으로 만들어줘야함

const testEx1 = (solution) => {
  testSolution([ex1_1, ex1_2], [answer1_1, answer1_2], solution);
};

// 2번
const ex2_1 = [10];
const ex2_2 = [27];
const ex2_3 = [12345];
const answer2_1 = "1010";
const answer2_2 = "11011";
const answer2_3 = "11000000111001";

const testEx2 = (solution) => {
  testSolution(
    [ex2_1, ex2_2, ex2_3],
    [answer2_1, answer2_2, answer2_3],
    solution
  );
};

// 3번
const ex3_1 = ["[](){}"];
const ex3_2 = ["}]()[{"];
const ex3_3 = ["[)(]"];
const ex3_4 = ["}}}"];
const answer3_1 = 3;
const answer3_2 = 2;
const answer3_3 = 0;
const answer3_4 = 0;

const testEx3 = (solution) => {
  testSolution(
    [ex3_1, ex3_2, ex3_3, ex3_4],
    [answer3_1, answer3_2, answer3_3, answer3_4],
    solution
  );
};

// 4번
const ex4_1 = ["baabaa"];
const ex4_2 = ["cdcd"];
const answer4_1 = 1;
const answer4_2 = 0;

const testEx4 = (solution) => {
  testSolution([ex4_1, ex4_2], [answer4_1, answer4_2], solution);
};

// 5번
const ex5_1 = [[1, 2, 3, 2, 3]];
const answer5_1 = [4, 3, 1, 1, 0];

const testEx5 = (solution) => {
  testSolution([ex5_1], [answer5_1], solution);
};

// 6번
const ex6_1 = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
];
const answer6_1 = 4;

const testEx6 = (solution) => {
  testSolution([ex6_1], [answer6_1], solution);
};

// 7번
const ex7_1 = [8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]];
const ex7_2 = [
  8,
  2,
  ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"],
];
const answer7_1 = "OOOOXOOO";
const answer7_2 = "OOXOXOOO";

const testEx7 = (solution) => {
  testSolution([ex7_1, ex7_2], [answer7_1, answer7_2], solution);
};

const testFunctions = [
  testEx1,
  testEx2,
  testEx3,
  testEx4,
  testEx5,
  testEx6,
  testEx7,
];
const testEx = (num, solution) => {
  validateAndRunTest(num, testFunctions, solution);
};

module.exports = {
  testEx,
};
