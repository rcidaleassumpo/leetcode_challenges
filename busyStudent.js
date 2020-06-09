/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTimes, endTimes, queryTime) {
    let count = 0;
    for(const [ind, startTime] of startTimes.entries()) {
        if(startTime <= queryTime && queryTime <= endTimes[ind]) {
            count++
        }
    }
    return count
};

// Runtime: 88 ms, faster than 21.07% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 37.4 MB, less than 5.04% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
