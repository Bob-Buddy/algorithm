const { testEx } = require("../example");
// 제목: 행렬의 곱셈
// 풀이:
// 250118 ver.claude
const solution = (arr1, arr2) => {
  const result = [];
  const m = arr1[0].length;
  const n = arr2[0].length;

  arr1.forEach((row1) => { // O(n * m * k)
    const resultRow = new Array(n).fill(0);

    for (let i = 0; i < resultRow.length; i++) {
      for (let j = 0; j < m; j++) {
        resultRow[i] += row1[j] * arr2[j][i];
      }
    }

    result.push(resultRow);
  });

  return result;
};

// 250118 ver.self..?2
const solution2 = (arr1, arr2) => {
  const result = [];
  const len1 = arr1[0].length;
  const len2 = arr2[0].length;

  arr1.forEach((numbers) => {
    const resultRow = new Array(len2).fill(0);

    resultRow.forEach((_, index2) => {
      for (let i = 0; i < len1; i++) {
        resultRow[index2] += numbers[i] * arr2[i][index2];
      }
    });
    result.push(resultRow);
  });

  return result;
};

// 241110 ver.self
/*
const solution = (arr1, arr2) => {
  const result = [];

  arr1.forEach((numbers) => { // 중첩반복: O(n * m²)
    const resultRow = [];

    numbers.forEach((_, index2) => {
      const sum = arr2.reduce((a, b, idx) => {
        return a + b[index2] * numbers[idx];
      }, 0);
      resultRow.push(sum);
    });

    result.push(resultRow);
  });

  return result;
};
*/

testEx(5, solution2);

// 왜 이렇게 풀었나요?
/*
 * 처음에는 arr2의 행과 열을 바꾸면 접근하려는 index를 간단하게 얻어
 * 두 행열의 계산을 쉽게 할 수 있을 것이라 생각했는데
 * 그렇게 되면 arr2 전체를 순회하기 위한
 * 별개의 중첩 반복문이 또 하나 생기며
 * 실행 시간이 불필요하게 늘어날 것 같아
 * arr2에 접근할 때 index를 계산하도록 구현했습니다
 *
 * 문제에서 곱셈이 가능한 배열만 주어진다고 언급했기 때문에
 * 다른 경우는 고려하지 않았고
 * forEach, reduce를 사용한 이유는 JS에서 제공하는
 * 배열 관련 메서드에 익숙해지기 위해서입니다
 *
 * + 250118
 * 시간복잡도를 계산해본 결과 O(n * m²)가 나와
 * 효율적이지 못한 것 같았지만 더 나은 코드가 떠오르지않아
 * claude의 도움을 받아봤습니다
 * 기존 코드의 가장 큰 문제는 reduce로
 * reduce의 콜백함수가 매번 호출되어 오버헤드가 발생되기때문에
 * 코딩테스트처럼 성능이 중요한 경우에는 중첩반복문 내에서는
 * reduce를 지양하고 일반 for문 등을 사용해 콜백함수 호출로 인한
 * 오버헤드를 최소화하는 것이 좋다고합니다
 * 대신 코드의 가독성, 간결성이 중요한 경우에는 꼭 for문이 아닌
 * reduce를 사용해도 괜찮고
 * 상황과 요구사항에 맞게 메서드를 선택해 사용하는 것이
 * 더 중요하다고 합니다
 * 만약 다시 작성한 코드에서 일관성을 챙기고싶다면
 * 모든 forEach를 일반 for문으로 바꿔 개선할 수 있습니다
 */

/*

1 4   3 3     1*3+4*3 = 3+12    1*3+4*3 = 3+12
3 2   3 3     3*3+2*3 = 9+6     3*3+2*3 = 9+6
4 1           4*3+1*3 = 12+3    4*3+1*3 = 12+3


2 3 2   5 4 3    2*5+3*2+2*3 = 10+6+6    2*4+3*4+2*1 = 8+12+2    2*3+3*1+2*1 = 6+3+2
4 2 4   2 4 1    4*5+2*2+4*3 = 20+4+12   4*4+2*4+4*1 = 16+8+4    4*3+2*1+4*1 = 12+2+4
3 1 4   3 1 1    3*5+1*2+4*3 = 15+2+12   3*4+1*4+4*1 = 12+4+4    3*3+1*1+4*1 = 9+1+4

*/
