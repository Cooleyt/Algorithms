/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let word = new Map();
    let output = 0;
    for (let i = 0; i < s.length; ++i) {

        if (word.has(s[i])) {
            if (word.size > output) output = word.size;
            let position = word.get(s[i]);
            word.forEach((value, letter) => {
                if (value <= position) {
                    word.delete(letter);
                }
            })
            word.set(s[i], i);
        } else {
            word.set(s[i], i)
        }
    }
    if (word.size > output) output = word.size;
    return output;
};


// console.log(lengthOfLongestSubstring(' '));
// console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring("qrsvbspk"));