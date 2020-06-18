/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
    let response = null;
    const inOrder = (r) => {
        if(!r) return null;
        if(r.val === val) {
           response = r;
        }  
        inOrder(r.left);
        inOrder(r.right);
    } 
    inOrder(root);
    return response;
};
