const { testEx } = require("../example");

// 제목: 배열 정렬하기
// 풀이:

const solution = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

testEx(1, solution);

// 왜 이렇게 풀었나요?
