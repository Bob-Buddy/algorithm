const { testEx } = require("../example");

// 제목: 행렬의 곱셈
// 풀이:

const solution = (arr1, arr2) => {
    const result = Array(arr1.length).fill().map(() => Array(arr2[0].length).fill(0));
    
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2[0].length; j++) {
            for(let k = 0; k < arr2.length; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
};

testEx(5, solution);

// 왜 이렇게 풀었나요?

/*
 * 1. 계산 방법
 *    - 3중 반복문을 사용해서 각 위치의 값을 계산
 *    - 결과[i][j] = arr1의 i번째 행과 arr2의 j번째 열의 곱의 합
 * 
 * 2. 반복문 설명
 *    - i: 첫 번째 행렬의 행 번호
 *    - j: 두 번째 행렬의 열 번호
 *    - k: 행과 열의 원소들을 곱하고 더하기 위한 index
 */