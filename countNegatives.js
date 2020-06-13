/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.reduce((acc, cur) => {
        return acc + cur.filter(a => a < 0).length
    }, 0)
};


// Runtime: 56 ms, faster than 84.41% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 37.8 MB, less than 8.72% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
