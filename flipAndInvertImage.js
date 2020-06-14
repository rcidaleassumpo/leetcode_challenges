/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const reverseI = v => v ? 0 : 1;
    const result = []
    for(a of A) {
        result.push(a.reverse().map(reverseI))
    }
    
    return result
    
};

// Runtime: 68 ms, faster than 69.80% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 37.3 MB, less than 5.48% of JavaScript online submissions for Flipping an Image.
