/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = []
    for(const [ind, val] of prices.entries()) {
        if(ind === prices.length -1) {
            result.push(val);
            break;
        }
        const temp = prices.slice(ind+1);
        const indx = temp.findIndex(valj => valj <= val)
        if(indx === -1) {
            result.push(val);
        } else {
            result.push(val - temp[indx]);
        }
    }
    return result
};

// Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
// Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
