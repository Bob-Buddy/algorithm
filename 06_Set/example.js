const { testSolution, validateAndRunTest } = require("../utils");

// 1번
const ex1_1 = [
  3,
  [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ],
];
const ex1_2 = [
  4,
  [
    ["u", 0, 1],
    ["u", 2, 3],
    ["f", 0],
  ],
];
const answer1_1 = 1;
const answer1_2 = 2;

const testEx1 = (solution) => {
  testSolution([ex1_1, ex1_2], [answer1_1, answer1_2], solution);
};

// 2번
const ex2_1 = [[3, 1, 2, 3]];
const ex2_2 = [[3, 3, 3, 2, 2, 4]];
const ex2_3 = [[3, 3, 3, 2, 2, 2]];
const answer2_1 = 2;
const answer2_2 = 3;
const answer2_3 = 2;

const testEx2 = (solution) => {
  testSolution(
    [ex2_1, ex2_2, ex2_3],
    [answer2_1, answer2_2, answer2_3],
    solution
  );
};

// 3번
const ex3_1 = [
  3,
  ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"],
];
const ex3_2 = [
  5,
  [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "exclusive",
  ],
];
const ex3_3 = [2, ["hello", "one", "even", "never", "now", "world", "draw"]];
const answer3_1 = [3, 3];
const answer3_2 = [0, 0];
const answer3_3 = [1, 3];

const testEx3 = (solution) => {
  testSolution(
    [ex3_1, ex3_2, ex3_3],
    [answer3_1, answer3_2, answer3_3],
    solution
  );
};

// 4번
const ex4_1 = [["119", "97674223", "1195524421"]];
const ex4_2 = [["123", "456", "789"]];
const ex4_3 = [["12", "123", "1235", "567", "88"]];
const answer4_1 = false;
const answer4_2 = true;
const answer4_3 = false;

const testEx4 = (solution) => {
  testSolution(
    [ex4_1, ex4_2, ex4_3],
    [answer4_1, answer4_2, answer4_3],
    solution
  );
};

// 5번
const ex5_1 = [
  4,
  [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ],
];
const answer5_1 = 4;

const testEx5 = (solution) => {
  testSolution([ex5_1], [answer5_1], solution);
};

const testFunctions = [testEx1, testEx2, testEx3, testEx4, testEx5];
const testEx = (num, solution) => {
  validateAndRunTest(num, testFunctions, solution);
};

module.exports = {
  testEx,
};
