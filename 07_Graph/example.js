const { testSolution, validateAndRunTest } = require("../utils");

// 1번
const ex1_1 = [
  [
    ["A", "B"],
    ["B", "C"],
    ["C", "D"],
    ["D", "E"],
  ],
  "A",
];
const ex1_2 = [
  [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["B", "E"],
    ["C", "F"],
    ["E", "F"],
  ],
  "A",
];
const answer1_1 = ["A", "B", "C", "D", "E"];
const answer1_2 = ["A", "B", "D", "E", "F", "C"];

const testEx1 = (solution) => {
  testSolution([ex1_1, ex1_2], [answer1_1, answer1_2], solution);
};

// 2번
const ex2_1 = [
  [
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (3, 6),
    (3, 7),
    (4, 8),
    (5, 8),
    (6, 9),
    (7, 9),
  ],
  1,
];
const ex2_2 = [[(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 0)], 1];
const answer2_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer2_2 = [1, 2, 3, 4, 5, 0];

const testEx2 = (solution) => {
  testSolution([ex2_1, ex2_2], [answer2_1, answer2_2], solution);
};

// 3번
const ex3_1 = [{ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"];
const ex3_2 = [{ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, "A"];
const answer3_1 = [
  { A: 0, B: 4, C: 3 },
  { A: ["A"], B: ["A", "C", "B"], C: ["A", "C"] },
];
const answer3_2 = [
  { A: 0, B: 1, C: 6, D: 7 },
  { A: ["A"], B: ["A", "B"], C: ["A", "B", "C"], D: ["A", "B", "C", "D"] },
];

const testEx3 = (solution) => {
  testSolution([ex3_1, ex3_2], [answer3_1, answer3_2], solution);
};

// 4번
const ex4_1 = [
  [[(1, 4), (2, 3), (4, -6)], [(1, 2)], [(0, 7), (2, 4)], [(2, 2)]],
  0,
];
const ex4_2 = [[[(1, 5), (2, -1)], [(2, 2)], [(3, -2)], [(0, 2), (1, 6)]], 0];
const answer4_1 = [
  [0, -2, -4, 3, -6],
  [null, 2, 4, 1, 0],
];
const answer4_2 = [-1];

const testEx4 = (solution) => {
  testSolution([ex4_1, ex4_2], [answer4_1, answer4_2], solution);
};

// 5번
const ex5_1 = [
  [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ],
];
const ex5_2 = [
  [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ],
];
const answer5_1 = 11;
const answer5_2 = -1;

const testEx5 = (solution) => {
  testSolution([ex5_1, ex5_2], [answer5_1, answer5_2], solution);
};

// 6번
const ex6_1 = [
  3,
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ],
];
const ex6_2 = [
  3,
  [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ],
];
const answer6_1 = 2;
const answer6_2 = 1;

const testEx6 = (solution) => {
  testSolution([ex6_1, ex6_2], [answer6_1, answer6_2], solution);
};

// 7번
const ex7_1 = [
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3,
];
const ex7_2 = [
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4,
];
const answer7_1 = 4;
const answer7_2 = 4;

const testEx7 = (solution) => {
  testSolution([ex7_1, ex7_2], [answer7_1, answer7_2], solution);
};

// 8번
const ex8_1 = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];
const ex8_2 = [
  [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ],
];
const ex8_3 = [
  [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ],
];
const ex8_4 = [
  [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ],
];
const answer8_1 = 900;
const answer8_2 = 3800;
const answer8_3 = 2100;
const answer8_4 = 3200;

const testEx8 = (solution) => {
  testSolution(
    [ex8_1, ex8_2, ex8_3, ex8_4],
    [answer8_1, answer8_2, answer8_3, answer8_4],
    solution
  );
};

// 9번
const ex9_1 = [
  9,
  [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ],
];
const ex9_2 = [
  4,
  [
    [1, 2],
    [2, 3],
    [3, 4],
  ],
];
const ex9_3 = [
  7,
  [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ],
];
const answer9_1 = 3;
const answer9_2 = 0;
const answer9_3 = 1;

const testEx9 = (solution) => {
  testSolution(
    [ex9_1, ex9_2, ex9_3],
    [answer9_1, answer9_2, answer9_3],
    solution
  );
};

const testFunctions = [
  testEx1,
  testEx2,
  testEx3,
  testEx4,
  testEx5,
  testEx6,
  testEx7,
  testEx8,
  testEx9,
];
const testEx = (num, solution) => {
  validateAndRunTest(num, testFunctions, solution);
};

module.exports = {
  testEx,
};
