const { testEx } = require("../example");

// 제목: 두 개 뽑아서 더하기
// 풀이:

const solution = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (!result.includes(sum)) {
        result.push(sum);
      }
    }
  }

  return result.sort((a, b) => a - b);
};

testEx(3, solution);

// 왜 이렇게 풀었나요?
