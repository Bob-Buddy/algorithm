const { testEx } = require("../example");
// 제목: 실패율
// 풀이:
// 1안
const solution1 = (N, stages) => {
  // 사용자 수: stages.length;
  let userCount = stages.length;

  const tmp = {}; // {stage: 통과인원} 형태로 저장

  stages.some((stage) => { // O(m)
    if (stage > N) return false; // stage 이후 데이터 사용 시 stage 개수가 추가되는 경우가 있어 제외
    if (tmp[stage]) {
      // 이미 해당 stage에 대한 데이터가 있는 경우 +1
      tmp[stage] += 1;
    } else {
      // 아직 stage 데이터가 없는 경우 1로 초기화
      tmp[stage] = 1;
    }
  });

  for (let i = 1; i <= N; i++) { // O(n)
    // 실패율 계산 후 tmp stage에 재할당
    const percent = (tmp[i] || 0) / userCount;
    userCount -= tmp[i] || 0;
    tmp[i] = percent;
  }

  // object에서 sort할 수 있는 방법 검색..
  const sortedPercents = Object.entries(tmp).sort(([, a], [, b]) => b - a); // 현재 tmp는 { stage번호: 실패율 }이므로 value를 기준으로 정렬
  return sortedPercents.map(([k, v]) => Number(k)); // stage 번호 배열을 숫자 배열로 변환해 반환
};

// 2안
const solution2 = (N, stages) => {
  let userCount = stages.length;

  const percents = new Array(N).fill().map((_, idx) => [idx + 1, 0]); // [[1, 0], [2, 0], ...] 배열 생성

  stages.some((stage) => { // O(m)
    if (stage > N) return false;
    percents[stage - 1][1] += 1;
  });

  for (let i = 0; i < N; i++) { // O(n)
    const passedUsers = percents[i][1];
    const percent = passedUsers / userCount;
    userCount -= passedUsers;
    percents[i][1] = percent;
  }
  percents.sort(([, a], [, b]) => b - a);

  return percents.map(([k, v]) => k);
};

console.log("------1-----");
testEx(6, solution1);
console.log("------2-----");
testEx(6, solution2);

// 왜 이렇게 풀었나요?
/*
 * 1안의 경우 객체에 key값을 이용해 접근하는 것은
 * 시간복잡도가 상수인 빠른 동작이라 알고있었기 때문에
 * stage 번호가 0부터 순서대로 들어오지 않는 이번 문제에서
 * 데이터에 접근해 값을 바꿔주기 쉬울 것이라 생각했습니다
 *
 * 하지만 1안의 마지막에서 결과 데이터를 반환하는 과정에서
 * 객체를 배열로 만들어 key값을 다시 뽑아내는 과정이
 * 시간이 오래걸릴 것 같아 2안을 시도했습니다
 *
 * 1안은 key-value 객체에 데이터를 저장해
 * 데이터 입출력을 간단하게 하는 방향으로,
 * 2안은 데이터를 배열만 활용해 다뤄
 * 최종 result를 만들 때 stage 기준으로
 * 정렬하기 쉬운 방향으로 진행했습니다
 *
 * 실행 결과는 매번 실행할 때마다 달라져 어떤 것이
 * 더 좋은 방법인지 확실하게는알 수 없지만
 * 평균적으로는 오히려 1안의 경우가 미세하게
 * 실행 시간이 적게 걸리는 경우가 많았습니다
 *
 * + 250118
 * 두 방법 다 O(n + m)의 시간복잡도를 갖지만
 * solution1은 Object.entries를 사용해 약간의 오버헤드가
 * 발생할 수 있어(객체 전체 순회 및 연산, 메모리 추가 사용)
 * 미세하게 solution2가 더 효율적이라고합니다
 *
 * 다만 실제 측정 시간이 solution1이 더 빠를 수 있는 이유는
 * some을 사용해 조기 종료가 가능한 점
 * Object.entries가 V8 엔진의 최적화로 작은 데이터셋에서는
 * 오히려 빠른 속도를 보일 수 있는 점
 * solution1은 객체를 재사용하고 solution2는 새 배열을 생성해
 * 오히려 오버헤드가 발생할 수 있다는 점
 * 이 세 가지를 들 수 있습니다
 *
 * 메모리 측면에서는 작은 데이터셋에서는 큰 차이가 없지만
 * 대규모 데이터의 경우 solution1의 방식이 더 유리할 수 있다고합니다
 */
