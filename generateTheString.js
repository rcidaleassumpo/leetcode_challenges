/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) { 
    return n % 2 === 0 ? 'x'.repeat(n-1) + 'y'.repeat(1) : 'y'.repeat(n)
};

// Runtime: 68 ms, faster than 39.82% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
// Memory Usage: 33.4 MB, less than 97.99% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.

6m.
