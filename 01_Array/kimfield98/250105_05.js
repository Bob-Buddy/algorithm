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
