function testSolution(ex_arr, answer_arr, solution) {
  ex_arr.forEach((ex, idx) => {
    if (answer_arr[idx] !== null) {
      try {
        const startTime = performance.now();
        const result = solution(...ex);

        const endTime = performance.now();
        const duration = endTime - startTime;

        const answer = answer_arr[idx];
        console.log("Result >>", result);
        console.log("Answer >>", answer);
        console.log(
          `ex${idx + 1} >>`,
          result.toString() === answer.toString() ? "🎉 CORRECT" : "💦 WRONG",
          "/ ⏱️",
          ` ${duration.toFixed(2)}ms`
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
