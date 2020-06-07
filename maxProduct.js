/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sorted = nums.sort((a, b) => a - b).reverse()
    return (sorted[0] - 1) * ( sorted[1] -1)
};


// Runtime: 104 ms, faster than 11.33% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
// Memory Usage: 40.9 MB, less than 5.23% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
