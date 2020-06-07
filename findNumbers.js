/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((a,b) => {
        if(!(String(b).length % 2)) {
           return a+1 
        } 
        return a
    }, 0)
};

// Runtime: 68 ms, faster than 35.17% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 36.4 MB, less than 21.96% of JavaScript online submissions for Find Numbers with Even Number of Digits.
