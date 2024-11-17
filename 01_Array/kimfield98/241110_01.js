const { testEx1 } = require("../example");

// 제목: 배열 정렬하기
// 풀이: 배열 오름차순 정렬 반환

const solution = (arr) => {
  const sortedArr = []
  const tempArr = [...arr]

  while (tempArr.length > 0) {
    const min = Math.min(...tempArr)
    sortedArr.push(min)
    const minIndex = tempArr.indexOf(min)
    tempArr.splice(minIndex,1)
  }
  return sortedArr
};

testEx1(solution);

// 왜 이렇게 풀었나요?
/**
* 1. arr.sort((a, b) => a - b)
* 2. sort 메서드를 알고 있어서 만약 없다면? 생각하고 풀었습니다.
* 3. 처음엔 양수와 음수를 filter로 나눈 두 배열을 만들어서 정렬해줘야 하나 고민
* 4. 손코딩 중 불필요하게 복잡하다는 사실을 깨닫고 아래와 같이 구현
* 5. 구현 방식:
*    - 임시 배열에서 최솟값을 찾고 (Math.min)
*    - 결과 배열에 추가하고 (push)
*    - 임시 배열에서 제거 (splice)
* 6. 시간복잡도: O(n²)
*    - while 루프: n번
*    - 각 루프마다 Math.min, indexOf, splice: 각각 O(n)
* 7. 결론: 학습용으로는 좋지만 실제로는 O(n log n)인 sort 메서드가 효율적
* 8. 제한: 배열 길이가 10⁵일 경우 1억 번 초과라 해당 풀이는 틀릴 수 있음
*/