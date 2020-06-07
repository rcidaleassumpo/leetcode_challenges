/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = []
    do {
        
        const [freq, val] = nums.splice(0,2)
        result.push(...Array.from(Array(freq), () => val))
        
        
    } while (nums.length)
   return result
};

// Runtime: 76 ms, faster than 87.15% of JavaScript online submissions for Decompress Run-Length Encoded List.
// Memory Usage: 42 MB, less than 5.05% of JavaScript online submissions for Decompress Run-Length Encoded List.
