const { testEx } = require("../example");

// 제목: 모의고사
// 풀이:

const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  const scores = patterns.map(pattern => {
    let correctCount = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === pattern[i % pattern.length]) {
        correctCount++;
      }
    }
    return correctCount;
  });

  const maxScore = Math.max(...scores);
  
  const topStudents = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      topStudents.push(i + 1);
    }
  }
  
  return topStudents;
};

testEx(4, solution);

// 왜 이렇게 풀었나요?
