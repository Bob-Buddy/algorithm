const { testSolution, validateAndRunTest } = require("../utils");

// 1번
const ex1_1 = [[1, 2, 3, 4, 8], 6];
const answer1_1 = true;
const ex1_2 = [[2, 3, 5, 9], 10];
const answer1_2 = false;

const testEx1 = (solution) => {
  testSolution([ex1_1, ex1_2], [answer1_1, answer1_2], solution);
};

// 2번
const ex2_1 = [
  ["apple", "banana", "cherry"],
  ["banana", "kiwi", "melon", "apple"],
];
const answer2_1 = [true, false, false, true];

const testEx2 = (solution) => {
  testSolution([ex2_1], [answer2_1], solution);
};

// 3번
const ex3_1 = [
  ["leo", "kiki", "eden"],
  ["eden", "kiki"],
];
const ex3_2 = [
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"],
];
const ex3_3 = [
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"],
];
const answer3_1 = "leo";
const answer3_2 = "vinko";
const answer3_3 = "mislav";

const testEx3 = (solution) => {
  testSolution(
    [ex3_1, ex3_2, ex3_3],
    [answer3_1, answer3_2, answer3_3],
    solution
  );
};

// 4번
const ex4_1 = [
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ],
];
const ex4_2 = [
  ["apple"],
  [10],
  [
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
  ],
];
const answer4_1 = 3;
const answer4_2 = 0;

const testEx4 = (solution) => {
  testSolution([ex4_1, ex4_2], [answer4_1, answer4_2], solution);
};

// 5번
const ex5_1 = [
  [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ],
];
const answer5_1 = [
  "Prodo님이 들어왔습니다",
  "Ryan님이 들어왔습니다",
  "Prodo님이 나갔습니다",
  "Prodo님이 들어왔습니다",
];

const testEx5 = (solution) => {
  testSolution([ex5_1], [answer5_1], solution);
};

// 6번
const ex6_1 = [
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500],
];
const answer6_1 = [4, 1, 3, 0];

const testEx6 = (solution) => {
  testSolution([ex6_1], [answer6_1], solution);
};

// 7번
const ex7_1 = [
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2,
];
const ex7_2 = [
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3,
];
const answer7_1 = [4, 1, 3, 0];
const answer7_2 = [0, 0];

const testEx7 = (solution) => {
  testSolution([ex7_1, ex7_2], [answer7_1, answer7_2], solution);
};

// 8번
const ex8_1 = [
  ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
  [2, 3, 4],
];
const ex8_2 = [
  ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
  [2, 3, 5],
];
const ex8_3 = [
  ["XYZ", "XWY", "WXA"],
  [2, 3, 4],
];
const answer8_1 = ["AC", "ACDE", "BCFG", "CDE"];
const answer8_2 = ["ACD", "AD", "ADE", "CD", "XYZ"];
const answer8_3 = ["WX", "XY"];

const testEx8 = (solution) => {
  testSolution(
    [ex8_1, ex8_2, ex8_3],
    [answer8_1, answer8_2, answer8_3],
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
];
const testEx = (num, solution) => {
  validateAndRunTest(num, testFunctions, solution);
};

module.exports = {
  testEx,
};
