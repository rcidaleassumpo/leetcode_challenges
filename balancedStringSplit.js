/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let splCount = 0;
    
    let oCount = {
        L: 0,
        R: 0
    }
    
    for(const [ind, val] of s.split('').entries()) {
        if(oCount.L === 0 && oCount.R === 0) {
            oCount[val]++
        } else {
            oCount[val]++
            const [a, b] = Object.entries(oCount)
            if(a[1] === b[1]) {
                splCount++
                oCount.L = 0
                oCount.R = 0
            }
        }
        
    }
    return splCount
};


// Runtime: 256 ms, faster than 6.20% of JavaScript online submissions for Split a String in Balanced Strings.
// Memory Usage: 44.8 MB, less than 5.02% of JavaScript online submissions for Split a String in Balanced Strings.
