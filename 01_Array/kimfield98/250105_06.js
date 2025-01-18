const { testEx } = require("../example");

// 제목: 실패율
// 풀이:

function solution(N, stages) {
    const failures = {};
    const reached = {};
    
    for (let i = 1; i <= N; i++) {
        failures[i] = 0;
        reached[i] = 0;
    }
    
    stages.forEach(stage => {
        if (stage <= N) {
            failures[stage]++;
        }
        
        for (let i = 1; i <= Math.min(stage, N); i++) {
            reached[i]++;
        }
    });
    
    const failureRates = [];
    
    for (let stage = 1; stage <= N; stage++) {
        failureRates.push({
            stage: stage,
            rate: reached[stage] === 0 ? 0 : failures[stage] / reached[stage]
        });
    }
    
    failureRates.sort((a, b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage;
        }
        return b.rate - a.rate;
    });
    
    return failureRates.map(item => item.stage);
}

testEx(6, solution);


// 왜 이렇게 풀었나요?
