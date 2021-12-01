Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'
    let output = true;
    if (isArray(other)) {
        compare(this, other)
        return output;
    } else {
        return false;
    }
    //mp = main piece
    //op = other piece
    function compare(mp, op) {
        if (isArray(mp) != isArray(op)) output = false;
        if (output && isArray(mp)) {
            if (mp.length != op.length) output = false;
            for (let i = 0; i < mp.length; ++i) {
                if (!output) break;
                if (isArray(mp[i]) === isArray(op[i])) {
                    if (isArray(mp[i])) compare(mp[i], op[i]);
                } else {
                    output = false
                }
            }
        }
    }
    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
};



console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));
console.log([1, 1, 1].sameStructureAs([2, 2, 2]));

// should return false 
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
console.log([1, [1, 1]].sameStructureAs([[2], 2]));

// should return true
console.log([[[], []]].sameStructureAs([[[], []]]));

// should return false
console.log([[[], []]].sameStructureAs([[1, 1]]));