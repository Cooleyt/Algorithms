// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

const removeDupe = (arr) => {
    const checkingSet = new Set()
    arr.forEach((value, idx) => checkingSet.has(value) ? arr.splice(idx,1) : checkingSet.add(value));
    return arr;
}

console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))