const { testEx } = require("../example");

// 제목: 배열 정렬하기
// 풀이:

const solution = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

testEx(1, solution);

// 왜 이렇게 풀었나요?

/*
 * 1. 자바스크립트 내장 메서드 학습
 *    - Array.sort() 메서드를 활용하여 배열 정렬 구현
 * 
 * 2. 리액트 스타일 적용
 *    - 선언적 프로그래밍: sort() 메서드로 의도를 명확히 표현
 *    - 불변성 원칙: 스프레드 연산자로 원본 배열 보존
 */