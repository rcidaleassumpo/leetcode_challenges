/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const ex = "(()())(())"
    const r = S.split('')
    let left = { count: 0}; // ind/count
    let right = { count: 0}; // ind/count
    const removeIndexes = []
    for(const [ind, val] of r.entries()) {
        if(val === '(') {
            if(left['count'] === 0) {
                left['index'] = ind
            }
            left.count += 1;
        } else if(val === ')') {
            right.count += 1;       
        }
        if(left.count === right.count) {
            r.splice(left.index, 1, '#')
            r.splice(ind, 1, '#')
            left = { count: 0};
            right = { count: 0};
        }
    }
    return r.filter(a => a != '#').join('')
};

// Runtime: 84 ms, faster than 22.66% of JavaScript online submissions for Remove Outermost Parentheses.
// Memory Usage: 43.4 MB, less than 5.11% of JavaScript online submissions for Remove Outermost Parentheses.
