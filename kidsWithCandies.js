/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // get the highest number, and substract by the extraCandies, 
    // that will get you the lowest number. All below that will always be false
    // 
    const limit = Math.max(...candies) - extraCandies
    if(limit < 0) {
        return candies.map(val => true)
    }
    return candies.map(candy => (candy >= limit))
    
};

// Success
// Details 
// Runtime: 64 ms, faster than 53.93% of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 33.8 MB, less than 81.63% of JavaScript online submissions for Kids With the Greatest Number of Candies.
