function testSolution(ex_arr, answer_arr, solution) {
  ex_arr.forEach((ex, idx) => {
    if (answer_arr[idx] !== null) {
      try {
        // 웜업 (JIT 컴파일러 최적화 -> 첫 실행은 최적화가 없기 때문에 상대적으로 느림)
        for (let i = 0; i < 5; i++) {
          solution(...ex);
        }

        // 실제 측정
        const times = [];
        // 실제 측정 횟수가 적으면 실행시간 신뢰도가 떨어지고 많으면 test 실행 시간이 늘어남
        for (let i = 0; i < 20; i++) {
          const startTime = performance.now();
          solution(...ex);

          const endTime = performance.now();
          times.push(endTime - startTime);
        }

        // 최소/최대값 제외 및 실행 평균시간 계산
        times.sort((a, b) => a - b);
        const trimmedTimes = times.slice(1, -1);
        const avgTime =
          trimmedTimes.reduce((a, b) => a + b) / trimmedTimes.length;

        // 최종 실행 및 정확성 체크
        const result = solution(...ex);
        const answer = answer_arr[idx];

        console.log("Result >>", result);
        console.log("Answer >>", answer);
        console.log(
          `ex${idx + 1} >>`,
          result.toString() === answer.toString() ? "🎉 CORRECT" : "💦 WRONG",
          "/ ⏱️",
          ` ${avgTime.toFixed(4)}ms`
        );
      } catch (e) {
        console.log("🚨🚨🚨 solution 실행 중 에러가 발생했습니다 🚨🚨🚨");
        console.error(e);
      }
    } else {
      console.log(`정답 배열 중 ${idx}번 인덱스의 데이터가 없습니다.`);
    }
  });
}

function validateAndRunTest(exNum, testFuncArr, solution) {
  if (exNum < 1 || exNum > testFuncArr.length) {
    console.error("존재하지 않는 문제번호입니다. 다시 확인해주세요");
    return;
  }
  testFuncArr[exNum - 1](solution);
}

module.exports = {
  testSolution,
  validateAndRunTest,
};
