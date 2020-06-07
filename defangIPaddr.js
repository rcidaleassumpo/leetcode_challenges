/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]')
};

// Runtime: 60 ms, faster than 37.16% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 33 MB, less than 93.05% of JavaScript online submissions for Defanging an IP Address.
