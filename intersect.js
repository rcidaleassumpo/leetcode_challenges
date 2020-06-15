/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var notGood = new Set();
    var result = [];
    
    for(const val of nums1) {
        
        if(!notGood.has(val)) {
            let temp = nums2.indexOf(val)
            if(temp === -1) {
                notGood.add(val)
            } else {
                result.push(nums2.splice(temp, 1)[0])
            }
                
        }
    }
    
    return result;
};
