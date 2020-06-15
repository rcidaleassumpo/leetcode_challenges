/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.indexOf(0) === -1) {
        return nums;   
    }
    
    let zeros = [];
    const remove0 = (arr) => {
        const arrOf0 = arr.indexOf(0);
        if(arrOf0 === -1) {
            return arr;
        } 
        zeros.push(arr.splice(arrOf0, 1));
        return remove0(arr);
    }
    
    return remove0(nums).push(...zeros);
};
