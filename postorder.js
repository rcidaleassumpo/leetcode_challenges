/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

var postorder = function(root) {
    const result = []
    const a = (r) => {
        if(r) {
            r.children.forEach(a)
            result.push(r.val);
        }
    }
    a(root)
    return result;
    
};
