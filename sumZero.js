/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = []
    for(let i = 1; i <= n/2 ; i++) {
        result.push(-i, i)
    }
    if(n%2 !== 0) {
        // Im odd
        result.push(0)
    }
    return result;
};

// Runtime: 76 ms, faster than 27.43% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 36.3 MB, less than 19.25% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
