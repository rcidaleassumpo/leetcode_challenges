/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const prod = String(n).split('').reduce((a,b) => Number(a) * Number(b), 1)
    const sum = String(n).split('').reduce((a,b) => Number(a) + Number(b), 0)
    return prod - sum
};

// Runtime: 72 ms, faster than 16.31% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 33.8 MB, less than 71.17% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
