const { testEx } = require("../example");
// 제목: 방문 길이
// 풀이: -> 다시 풀이 필요
const solution = (str) => {
  const tmp = new Set();
  let x = 0;
  let y = 0;

  Array.from(str).forEach((char) => {
    let flag = 0; // 방향 체크를 위한 데이터 - y이동: 1, x이동: 2

    if (char === "U" && y < 5) {
      flag = 1;
      y += 1;
    } else if (char === "D" && y > -5) {
      flag = 1;
      y -= 1;
    } else if (char === "R" && x < 5) {
      flag = 2;
      x += 1;
    } else if (char === "L" && x > -5) {
      flag = 2;
      x -= 1;
    }

    // 방향 값이 있어야 움직인 것 (움직인 경우에만 최종 데이터에 추가)
    if (flag) {
      tmp.add([flag, x, y].toString());
    }
  });

  return tmp.size;
};

testEx(7, solution);

// 왜 이렇게 풀었나요?
/*
 * 이동한 루트를 제외한다는 것은 지나간 모든 좌표를 제외하는 것이 아닌
 * 방향 데이터를 포함해 판단한 뒤 제외해야한다 생각해 flag 추가해
 * X의 움직임인지 Y의 움직임인지 판단할 수 있게 했습니다
 *
 * flag는 최초에 0으로 초기화 한 뒤 현재 입력이 경계 밖으로의 이동이 아닌 경우에만
 * 이동한 것으로 판단해 방향 데이터를 정의해주고
 * 방향 데이터가 있어야 지나간 경로로 판단해 이동한 좌표 데이터를
 * 이미 이동한 경로 데이터에 추가했습니다
 *
 * 경로 데이터는 set으로 관리해 자체적으로 중복 데이터가 발생하지 않게 했습니다
 */
