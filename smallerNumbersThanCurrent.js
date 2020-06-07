/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((val,ind, arr) => {
        return arr.filter(a => val > a).length
    }) 
};

// Runtime: 116 ms, faster than 13.66% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 42.7 MB, less than 5.05% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
