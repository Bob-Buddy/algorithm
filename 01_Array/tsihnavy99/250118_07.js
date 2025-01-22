const { testEx } = require("../example");
// 제목: 방문 길이
// 풀이:
// 250118 ver.2
const solution = (str) => {
  const tmp = new Set();
  let x = 0;
  let y = 0;

  Array.from(str).forEach((char) => { // O(n)
    let flag = 0; // 방향 체크를 위한 데이터 - y이동: 1, x이동: 2
    let targetX = x;
    let targetY = y;

    if (char === "U" && y < 5) {
      flag = 1;
      targetY += 1;
      y += 1;
    } else if (char === "D" && y > -5) {
      flag = 1;
      y -= 1;
    } else if (char === "R" && x < 5) {
      flag = 2;
      targetX += 1;
      x += 1;
    } else if (char === "L" && x > -5) {
      flag = 2;
      x -= 1;
    }

    // 방향 값이 있어야 움직인 것 (움직인 경우에만 최종 데이터에 추가)
    if (flag) {
      tmp.add([flag, targetX, targetY].toString());
    }
  });

  return tmp.size;
};

testEx(7, solution);

// 왜 이렇게 풀었나요?
/*
 * 이전 풀이는 방향에 대한 고려를 시도했으나
 * (1, 0)에서 (0, 0)으로 이동한 것과 (-1, 0)에서 (0, 0)으로
 * 이동한 경우를 동일하게 판단하는 로직,
 * 같은 경로가 아닌 같은 최종 좌표만을 공유했었습니다
 *
 * 이를 수정하기위해 모든 움직임이 더 작은 좌표값으로부터
 * 큰 좌표값으로 이동하는 것처럼 저장값을 변경했습니다
 * 예를들어 (0, 0)에서 (-1, 0)으로 이동한 것이나
 * (-1, 0)에서 (0, 0)으로 이동한 것 모두
 * 저장하는 최종 target 값은 (0, 0), flag는 1이 되도록 해
 * 이 두 이동이 같은 경로를 이용하는 것이라고 판단되게 수정했습니다
 *
 * 이 경우 O(n)이라는 시간복잡도를 갖게됩니다
 */

/* 241110 ver.1
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
