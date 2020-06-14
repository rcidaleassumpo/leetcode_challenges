/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const result = []
    A.forEach(a => a%2 === 0 ? result.unshift(a) : result.push(a))
    return result
};

// Runtime: 96 ms, faster than 25.68% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 38.4 MB, less than 26.41% of JavaScript online submissions for Sort Array By Parity.

5m
