const { testEx } = require("../example");
// 제목: 두 개 뽑아서 더하기
// 풀이:
const solution = (arr) => {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      set.add(arr[i] + arr[j]); // 중복데이터가 아닌 값만 추가
    }
  }

  return Array.from(set).sort((a, b) => a - b);
};

testEx(3, solution);

// 왜 이렇게 풀었나요?
/*
  2번 문제와 마찬가지로 중복을 허용하지 않기 위해 Set 사용했습니다
  
  for문을 통해 전체 데이터를 순회할 것이고
  중복값은 제외하기때문에 앞에서 만든 조합은 다시 거칠 필요가 없어
  중첩된 for문에서 j의 시작값을 i+1로 지정해
  지나친 데이터는 신경쓰지 않도록 했습니다

  마지막은 JS에서 제공하는 메서드를 이용해
  set을 배열화하고
  오름차순으로 정렬된 배열을 반환했습니다
*/
