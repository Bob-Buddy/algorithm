const { testEx } = require("../example");

// 제목: 방문길이
// 풀이:

function solution(dirs) {
    let current = [0, 0];
    
    const visitedPaths = new Set();
    
    const moves = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };
    
    [...dirs].forEach(dir => {
        const nextX = current[0] + moves[dir][0];
        const nextY = current[1] + moves[dir][1];
        
        if (nextX >= -5 && nextX <= 5 && nextY >= -5 && nextY <= 5) {
            const path1 = `${current[0]},${current[1]},${nextX},${nextY}`;
            const path2 = `${nextX},${nextY},${current[0]},${current[1]}`;
            
            visitedPaths.add(path1);
            visitedPaths.add(path2);
            
            current = [nextX, nextY];
        }
    });
    
    return visitedPaths.size / 2;
}

testEx(7, solution);

// 왜 이렇게 풀었나요?