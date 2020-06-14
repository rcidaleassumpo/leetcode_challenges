/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const isSelfDiving = (n) => {
        if(n < 10) {
            return true; 
        }
        for(const val of String(n).split("")) {
            
           if(val === 0) {
                return false;
            }
            if((n % Number(val)) !== 0) {
                return false;
            }   
        }
        return true;
    }
    
    let innerLeft = left;
    let innerRight = right;
    let result = [];
    
    while(innerLeft - innerRight <= 0) {
        if(innerLeft - innerRight === 0) {
          isSelfDiving(innerLeft) ? result.push(innerLeft) : 0;
        } else {
          isSelfDiving(innerLeft) ? result.push(innerLeft) : 0;
          isSelfDiving(innerRight) ? result.push(innerRight) : 0;
        }
        innerLeft++;
        innerRight--;
        
    }
    
    return result.sort((a, b) => a-b);
};
