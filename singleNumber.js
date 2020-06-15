 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    const x = new Set()
    for(const val of nums) {
       if(x.has(val)) {
           x.delete(val)
       } else {
           x.add(val);
       }
    }
    
    return Array.from(x)[0]
    
};
