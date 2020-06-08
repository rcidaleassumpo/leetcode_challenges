/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let result = 0
    let val = head.val;
    let next = head.next;
    let lengthLL = 0
    let arr = [0]
    
    while(next) {
        lengthLL++
        arr.push(lengthLL)
        val = next.val
        next = next.next  
    }
        
    val = head.val
    next = head.next
        
    for(const ind of arr.reverse()) {
        if(val) {
            result+=(2**ind)
        }
        if(next) {
            val = next.val
            next = next.next
        }
        
    }
    return result
};


// Runtime: 68 ms, faster than 32.98% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
// Memory Usage: 33.7 MB, less than 77.74% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
