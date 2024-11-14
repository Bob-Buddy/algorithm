const { testSolution } = require("../utils");

// 1번
const ex1_1 = [[1, -5, 2, 4, 3]];
const ex1_2 = [[2, 1, 1, 3, 2, 5, 4]];
const ex1_3 = [[6, 1, 7]];
const answer1_1 = [-5, 1, 2, 3, 4];
const answer1_2 = [1, 1, 2, 2, 3, 4, 5];
const answer1_3 = [1, 6, 7];

const testEx1 = (solution) => {
  testSolution(
    [ex1_1, ex1_2, ex1_3],
    [answer1_1, answer1_2, answer1_3],
    solution
  );
};

// 2번
const ex2_1 = [[4, 2, 2, 1, 3, 4]];
const ex2_2 = [[2, 1, 1, 3, 2, 5, 4]];
const answer2_1 = [4, 3, 2, 1];
const answer2_2 = [5, 4, 3, 2, 1];

const testEx2 = (solution) => {
  testSolution([ex2_1, ex2_2], [answer2_1, answer2_2], solution);
};

// 3번
const ex3_1 = [[2, 1, 3, 4, 1]];
const ex3_2 = [[5, 0, 2, 7]];
const answer3_1 = [2, 3, 4, 5, 6, 7];
const answer3_2 = [2, 5, 7, 9, 12];

const testEx3 = (solution) => {
  testSolution([ex3_1, ex3_2], [answer3_1, answer3_2], solution);
};

// 4번
const ex4_1 = [[1, 2, 3, 4, 5]];
const ex4_2 = [[1, 3, 2, 4, 2]];
const answer4_1 = [1];
const answer4_2 = [1, 2, 3];

const testEx4 = (solution) => {
  testSolution([ex4_1, ex4_2], [answer4_1, answer4_2], solution);
};

// 5번
const ex5_1 = [
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ],
];
const ex5_2 = [
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ],
];
const answer5_1 = [
  [15, 15],
  [15, 15],
  [15, 15],
];
const answer5_2 = [
  [22, 22, 11],
  [36, 28, 18],
  [29, 20, 14],
];

const testEx5 = (solution) => {
  testSolution([ex5_1, ex5_2], [answer5_1, answer5_2], solution);
};

// 6번
const ex6_1 = [5, [2, 1, 2, 6, 2, 4, 3, 3]];
const ex6_2 = [4, [4, 4, 4, 4, 4]];
const answer6_1 = [3, 4, 2, 1, 5];
const answer6_2 = [4, 1, 2, 3];

const testEx6 = (solution) => {
  testSolution([ex6_1, ex6_2], [answer6_1, answer6_2], solution);
};

// 7번
const ex7_1 = ["ULURRDLLU"];
const ex7_2 = ["LULLLLLLU"];
const answer7_1 = 7;
const answer7_2 = 7;

const testEx7 = (solution) => {
  testSolution([ex7_1, ex7_2], [answer7_1, answer7_2], solution);
};

module.exports = {
  testEx1,
  testEx2,
  testEx3,
  testEx4,
  testEx5,
  testEx6,
  testEx7,
};
