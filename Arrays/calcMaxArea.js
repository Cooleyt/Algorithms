// move the pointers inwards towards each other
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    let area = 0;
    while (i < j) {
        area = Math.min(height[i], height[j])* Math.abs(j - i);
        if (area > max) {
            max = area;
        }
        if (height[i] <= height[j]) {
            ++i;
        } else {
            --j;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 4, 3]));


// console.log(`i:${i}`);
// console.log(`j:${j}`);
// console.log(`Max: ${max}`);

// console.log(`i:${i}`);
// console.log(`j:${j}`);
// console.log(`Max: ${area}`);