// inOrderCombinations(input, output, ...?)
// input is a string
// return an array with all strings you could make with the characters from the
// given input, in the order that they're presented - this is your output
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "hjj" -> ["", "h", "j", "j", "hj", "hj", "jj", "hjj"]
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps",
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// input of length n leads to 2^n output elements
// every character in the output appears with equal occurance
// test with at least 4 characters in input
// make sure to use recursion
// don't forget a base case to end recursion
//
// your parameters... maybe three, maybe four?
// suggestions:
// a parameter to keep track of which letter you're looking at?
// a parameter to keep track of the string you're building from call to call?
// other parameters probably have a default too

function inOrderCombinations(input, output = [], position = 0, partial = '') {

    if (position == input.length) {
        output.push(partial);
    }
    else {
        inOrderCombinations(input, output, position + 1, partial + input[position]);
        inOrderCombinations(input, output, position + 1, partial);
    }

    return output;
}

// var x = inOrderCombinations('tkpsi')
// console.log(x);
// console.log(x.length == 32);

function inOrderSubsets(str, solutions = [], partial = "") {
    solutions.push(partial);

    for (let i = 0; i < str.length; i++) {
        const sliced = str.slice(i + 1);
        inOrderSubsets(sliced, solutions, partial + str[i]);
    }

    return solutions;
}

var x = inOrderSubsets('tkpsi')
console.log(x);
console.log(x.length == 32);



// telephoneWords(input, output, ... ?)
// input is a string of digits -> '83461'
// output is an array of all 'words' representable by those digits on a telephone
// keypad (following ITU E.161 standard, modified for the key 0)
// order of output does not matter
// '746024' -> ['PGM AG', 'RHO CH'...]
// all output strings should be the same length
// what does the output for '309' look like?
// ['D W', 'D X', 'D Y', 'D Z', 'E X', ...]
// 1: _,@
// 2: ABC
// 3: DEF
// 4: GHI
// 5: JKL
// 6: MNO
// 7: PQRS
// 8: TUV
// 9: WXYZ
// 0: ' ' (a space)

var phone = {
    1: '_,@',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: ' ',
}

function telephoneWords(input, output = [], position = 0, partial = '') {

    for (var i = 0; i < input; ++i)

        return output;
}