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

/*
 * 1. 명시적인 로직 구현
 *    - patterns 배열: 각 수포자의 찍기 패턴을 2차원 배열로 정의
 *    - 점수 계산: for문으로 각 문제마다 정답 여부를 직접 확인
 *    - 최고점자 선별: for문으로 최고점수 학생 찾기
 * 
 * 2. 리액트 스타일 적용 ▲
 *    - 선언적 프로그래밍: reduce 사용이 익숙하지 않아 for문을 이용
 *    - 불변성 원칙: 새로운 배열에 결과 저장
 */