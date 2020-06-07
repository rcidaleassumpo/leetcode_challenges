/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    
    let currNumber = num
    let result = 0
   
    if(num == 0) {
        return result
    }
    
    do {
        if (currNumber % 2 === 0) {
            currNumber = currNumber / 2
            result++
        } else {
            currNumber = currNumber - 1
            result++
        }
        
        
    } while (currNumber > 0)
        
    return result
    
};

// Runtime: 76 ms, faster than 17.06% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 35.2 MB, less than 12.03% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
