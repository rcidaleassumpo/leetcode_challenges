/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const repeated = new Set();
    
    for(const val of A) {
        if(repeated.has(val)) {
            return val;
        } else {
            repeated.add(val)
        }
    }
};
