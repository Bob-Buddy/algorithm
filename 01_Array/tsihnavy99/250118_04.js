const { testEx } = require("../example");
// 제목: 모의고사
// 풀이:
const solution1 = (arr) => {
  const result = [];
  let firstStudent = 0; // 학생1 정답 개수
  let secondStudent = 0; // 학생2 정답 개수
  let thirdStudent = 0; // 학생3 정답 개수
  const secondPattern = [1, 3, 4, 5];
  const thirdPattern = [3, 1, 2, 4, 5];

  arr.forEach((answer, index) => {
    firstStudent += Number((index + 1) % 5 === answer % 5);

    if (index % 2 === 0) {
      secondStudent += Number(answer === 2);
    } else {
      const findIndex = Number.parseInt(index / 2) % 4;
      secondStudent += Number(answer === secondPattern[findIndex]);
    }

    const findIndex = Number.parseInt(index / 2) % 5;
    thirdStudent += Number(answer === thirdPattern[findIndex]);
  });

  const max = Math.max(firstStudent, secondStudent, thirdStudent);
  [firstStudent, secondStudent, thirdStudent].forEach((score, index) => {
    if (score === max) {
      result.push(index + 1);
    }
  });

  return result;
};

const solution2 = (arr) => {
  const result = [];
  let firstStudent = 0; // 학생1 정답 개수
  let secondStudent = 0; // 학생2 정답 개수
  let thirdStudent = 0; // 학생3 정답 개수
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPattern = [3, 1, 2, 4, 5];

  arr.forEach((answer, index) => { // O(n)
    firstStudent += Number((index + 1) % 5 === answer % 5);

    const secondIndex = index % 8;
    secondStudent += Number(answer === secondPattern[secondIndex]);

    const thirdIndex = Number.parseInt(index / 2) % 5;
    thirdStudent += Number(answer === thirdPattern[thirdIndex]);
  });

  const max = Math.max(firstStudent, secondStudent, thirdStudent);
  [firstStudent, secondStudent, thirdStudent].forEach((score, index) => {
    if (score === max) {
      result.push(index + 1);
    }
  });

  return result;
};

console.log("=====1=====");
testEx(4, solution1);
console.log("=====2=====");
testEx(4, solution2);

// 왜 이렇게 풀었나요?
/*
 * 학생1의 경우 1부터 5까지를 순서대로 반복하고
 * 학생2의 경우 짝수 문제는 2, 그 외의 문제는 1, 3, 4, 5 순서로 반복하고
 * 학생3의 경우 3, 1, 2, 4, 5를 순서대로 반복하기 때문에
 * 이를 패턴화한 후 저장해 사용했습니다
 *
 * 이렇게 사용할 경우 반복되는 패턴을 매번 계산하거나 찾을 필요가 없고
 * 모든 패턴을 미리 정의해두면 정답 배열을 한 번만 순회를 돌아도
 * index를 활용해 모든 학생의 정답여부를 확인할 수 있어
 * 실행시간을 단축할 수 있다고 생각했습니다
 *
 * solution1의 경우 학생2의 패턴에 대해 2를 정답으로 찍는 경우를
 * index % 2로 0을 포함한 짝수 문제로 두어 forEach를 돌 때 계산하게했고
 * solution2의 경우 학생2의 패턴 배열에 모든 케이스를 두어 반복문에서
 * index 조건을 위한 추가적인 계산을 줄여봤습니다
 *
 * 하지만 두 풀이에 대해 성능차이는 크지 않았고
 * 오히려 평균적으로 solution1이 미세하게 빠른 실행시간을 보였습니다
 *
 * + 250118
 * solution1, 2는 모두 O(n)의 시간복잡도를 갖지만
 * 실질적으로는 solution2가 연산 횟수가 더 적고
 * 조건문 분기가 없어 CPU 분기 예측 최적화에 유리하기때문에
 * 보통은 더 나은 성능을 갖는다고합니다
 *
 * 실행 결과에서 solution1이 더 빠른 이유는 아래로 예상해볼 수 있습니다
 * 1. 현대 JS 엔진이 solution1의 if-else의 반복을 예측해
 * 반복되는 패턴을 컴파일러가 더 효과적으로 최적화할 수 있습니다
 * 2. solution2에 비해 solution1이 더 짧은 배열을 사용해 CPU 캐시를
 * 더 효율적으로 활용할 수 있습니다
 * 3. 더 큰 패턴 배열을 사용하는 것이 캐시 미스를 더 자주 발생시킬 수 있습니다
 *
 * 코드 일관성, 단순성, 유지보수성, 가독성 측면에서는 solution2가 더 낫기 때문에
 * 실무에서 사용할 경우에는 solution2의 방식으로 하는 것이 낫고
 * 실행시간과 메모리 사용에 제한이 있는 코딩테스트에서는
 * 실행시간이 비교적 짧은 solution1의 방식이 낫습니다
 */
