/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    return S.split('').filter(l => J.includes(l)).length
};

// Runtime: 72 ms, faster than 36.16% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 34 MB, less than 74.83% of JavaScript online submissions for Jewels and Stones.
