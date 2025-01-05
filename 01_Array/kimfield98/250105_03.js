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

/*
 * 1. 명시적인 로직 구현
 *    - 이중 반복문으로 모든 조합 계산
 *    - includes로 중복 여부 확인
 * 
 * 2. 리액트 스타일 적용
 *    - 선언적 프로그래밍: 각 단계별 목적이 명확한 코드 구성
 *    - 불변성 원칙: 새로운 배열에 결과 저장
 */