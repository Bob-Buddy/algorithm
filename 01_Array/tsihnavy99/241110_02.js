const { testEx } = require("../example");
// 제목: 배열 제어하기
// 풀이:
const solution = (arr) => {
  const set = new Set(arr); // 중복 데이터 제거

  return Array.from(set).sort((a, b) => b - a); // 배열화, 역순 정렬
};

testEx(2, solution);

// 왜 이렇게 풀었나요?
/*
  중복 데이터를 허용하지 않는 Set을 사용하면
  직접 순회하는 로직을 구현하지 않고 빠르게
  문제를 해결할 수 있을 것이라 생각했습니다
  또한 sort에 비교함수를 추가하면 역순으로
  정렬하는 로직도 간단하게 구현 가능해
  sort를 사용했습니다

  JS에서 제공하는 메서드에 익숙해지려는 목적도 있지만
  문제에서 다른 조건이나 제한을 두지 않았기 때문에
  기존에 JS에서 제공하는 내장 객체나 메서드만
  활용해도 충분하다 생각했습니다
*/
