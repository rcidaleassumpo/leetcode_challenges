/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    let i = arr.length-1;
    
    while(i >= 0) {
        let temp = arr[i];
        arr[i] = max;
        max  = Math.max(temp,max);
        i--
    }
    return arr;
};


// Runtime: 128 ms, faster than 45.82% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 38.8 MB, less than 49.02% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
