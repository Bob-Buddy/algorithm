const { testEx } = require("../example");

// 제목: 배열 제어하기
// 풀이:

const solution = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr.sort((a, b) => b - a);
};

testEx(2, solution);

// 왜 이렇게 풀었나요?
