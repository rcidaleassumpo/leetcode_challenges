/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const alpMorse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    // a = 97 z = 122;
    // gin
    // g 
    
    const finalResult = {};
    for(const word of words) {
        const result = word.replace(/[a-z]/g, (val, i) => {
            return alpMorse[word.charCodeAt(i) - 97];
        })
        if(finalResult[result]) {
            finalResult[result]++
        } else {
            finalResult[result] = 1
        }
    }
    
    return Object.keys(finalResult).length
};
