/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // number of up/down count has to be the same
    // number of r/l has to be the same, since they 0 out.
    let xAxis = 0;
    let yAxis = 0;
    for(const m of moves) {
        if(m === 'L') { xAxis -= 1 };
        if(m === 'R') { xAxis += 1 };
        if(m === 'U') { yAxis += 1 };
        if(m === 'D') { yAxis -= 1 };
    }
    return yAxis === 0 && xAxis === 0;
};
