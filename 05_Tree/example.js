const { testSolution, validateAndRunTest } = require("../utils");

// 1번
const ex1_1 = [[1, 2, 3, 4, 5, 6, 7]];
const answer1_1 = ["1 2 4 5 3 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"];

const testEx1 = (solution) => {
  testSolution([ex1_1], [answer1_1], solution);
};

// 2번
const ex2_1 = [
  [5, 3, 8, 4, 2, 1, 7, 10],
  [1, 2, 5, 6],
];
const ex2_2 = [
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
];
const answer2_1 = [true, true, true, false];
const answer2_2 = [false, false, false, false, false];

const testEx2 = (solution) => {
  testSolution([ex2_1, ex2_2], [answer2_1, answer2_2], solution);
};

// 3번
const ex3_1 = [8, 4, 7];
const answer3_1 = 3;

const testEx3 = (solution) => {
  testSolution([ex3_1], [answer3_1], solution);
};

// 4번
const ex4_1 = [
  ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
  ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
  ["young", "john", "tod", "emily", "mary"],
  [12, 4, 2, 5, 10],
];
const ex4_2 = [
  ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
  ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
  ["sam", "emily", "jaimie", "edward"],
  [2, 3, 5, 4],
];
const answer4_1 = [360, 958, 108, 0, 450, 18, 180, 1080];
const answer4_2 = [0, 110, 378, 180, 270, 450, 0, 0];

const testEx4 = (solution) => {
  testSolution([ex4_1, ex4_2], [answer4_1, answer4_2], solution);
};

// 5번
const ex5_1 = [["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]];
const ex5_2 = [["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]];
const answer5_1 = 16;
const answer5_2 = -1;

const testEx5 = (solution) => {
  testSolution([ex5_1, ex5_2], [answer5_1, answer5_2], solution);
};

// 6번
const ex6_1 = [
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [
    [0, 1],
    [1, 2],
    [1, 4],
    [0, 8],
    [8, 7],
    [9, 10],
    [9, 11],
    [4, 3],
    [6, 5],
    [4, 6],
    [8, 9],
  ],
];
const ex6_2 = [
  [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
    [3, 7],
    [4, 8],
    [6, 9],
    [9, 10],
  ],
];
const answer6_1 = 5;
const answer6_2 = 5;

const testEx6 = (solution) => {
  testSolution([ex6_1, ex6_2], [answer6_1, answer6_2], solution);
};

// 7번
const ex7_1 = [
  [
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ],
];
const answer7_1 = [
  [7, 4, 6, 9, 1, 8, 5, 2, 3],
  [9, 6, 5, 8, 1, 4, 3, 2, 7],
];

const testEx7 = (solution) => {
  testSolution([ex7_1], [answer7_1], solution);
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
