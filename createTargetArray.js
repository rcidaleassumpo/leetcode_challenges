/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target=[]
    
    for(const [ind, val] of nums.entries()) {
        
        target.splice(index[ind], 0, val)
        
    }
    
    return target
};

// Runtime: 72 ms, faster than 16.71% of JavaScript online submissions for Create Target Array in the Given Order.
// Memory Usage: 34.2 MB, less than 25.46% of JavaScript online submissions for Create Target Array in the Given Order.
