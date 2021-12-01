var big = [
    [67, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21]
];

var small = [
    [67, 78],
    [43, 32]
];

var anotherSmall = [
    [67, 7],
    [43, 32]
];


function matrixSearch(larger, smaller) {
    var output = false;
    larger.forEach((element, idx) => {
        var numPosition = element.indexOf(smaller[0][0]);
        console.log(numPosition);
        if (numPosition > -1) {
            let si = 0;
            let sj = 1;
            let match = true;
            while (match && si < smaller.length) {
                if (sj >= smaller[si].length) {
                    sj = 0;
                    ++si
                }
                if (si < smaller.length) {
                    if (idx + si >= larger.length || numPosition + sj >= larger[0].length) {
                        match = false;
                    }
                    console.log(idx + si);
                    console.log(numPosition + sj);
                    console.log();
                    if (larger[idx + si][numPosition + sj] != smaller[si][sj]) {
                        match = false;
                    }
                    ++sj
                }
            }
            if (match) {
                output = true;
            }
        }
    });
    return output;
}
console.log(matrixSearch(big,small));
console.log(matrixSearch(big,anotherSmall));