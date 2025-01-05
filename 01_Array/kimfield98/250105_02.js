const { testEx } = require("../example");

// 제목: 배열 제어하기
// 풀이:

const solution = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr.sort((a, b) => b - a);
};

testEx(2, solution);

// 왜 이렇게 풀었나요?

/*
 * 1. 최신 자바스크립트 기능 활용
 *    - Set 객체로 중복 제거
 *    - 스프레드 연산자로 배열 변환
 * 
 * 2. 리액트 스타일 적용
 *    - 선언적 프로그래밍: 각 단계의 목적이 명확한 코드 구성
 *    - 불변성 원칙: 원본 배열 보존하며 새로운 결과 반환
 */