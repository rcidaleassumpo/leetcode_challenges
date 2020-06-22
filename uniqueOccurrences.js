/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    const occ = {}
   for(const el of arr) {
       if(occ[el]) {
           occ[el] += 1;
       } else {
           occ[el] = 1;
       }
   }
    return Object.values(occ).length === new Set(Object.values(occ)).size ;
};
