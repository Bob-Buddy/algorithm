const { testSolution } = require("../../utils");
const { testEx } = require("../example");
// 제목: 배열 정렬하기
// 풀이:
const solution = (arr) => {
  return arr.sort((a, b) => a - b); // O(nlogn) (V8 기준 Timsort 사용)
};

testEx(1, solution);

// 추가 테스트 케이스
const ex4 = [[2, 1, 10, 3, 2, 5, 4]];
const answer4 = [1, 2, 2, 3, 4, 5, 10];
testSolution([ex4], [answer4], solution);

// 왜 이렇게 풀었나요?
/*
 * 자바스크립트에서 기본적으로 제공해주는
 * 내장 메서드가 대부분의 상황에서
 * 효율적인 동작을 하도록 만들어져있을 것이기 때문에
 * 다른 방법을 사용하는 것보다
 * 가장 간단하면서도 효율적일 것이라 생각했습니다
 *
 * sort에 비교함수를 추가하지 않는 경우
 * 추가 테스트 케이스의 경우 10이 마지막이 아닌 1 다음에 오는
 * 문제가 발생해 비교함수로 오름차순임을 명시했습니다
 *
 * + 250118
 * 만약 직접 구현한 정렬 메서드를 요구한다면
 * QuickSort를 구현하는 것이 가장 현실적이라고합니다
 * 내장 sort에서는 하이브리드 정렬 알고리즘인
 * TimSort(삽입+병합)를 사용하지만 이는 복잡하고
 * 구현에 시간이 많이 걸리기 때문에
 * 시간복잡도가 O(nlogn)으로 동일한 QuickSort를
 * 구현하는 것이 현실적이라고합니다
 * 단, 시험 시간이 넉넉하고 최적화가 중요하다면
 * TimSort를 구현해야할 수도 있다고합니다
 */
