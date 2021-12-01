// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


// function binarySearch(arr, value){
// }
function binarySearchRecursive(arr, target, start = 0, end = arr.length-1) {
    let pivot = Math.floor(Math.random() * (end - start)) + start;
    if (start == end-1) {
        if (target === arr[pivot] || target == arr[start] || target == arr[end]) {
            return true;
        } else {
            return false;
        }
    }
    if (target == arr[pivot]) {
        return true;
    }
    if (target < arr[pivot]) {
        return binarySearchRecursive(arr, target, start, pivot);
    }
    if (target > arr[pivot]) {
        return binarySearchRecursive(arr, target, pivot, end);
    }
}
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], 10)); // TRUE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9)); //   FALSE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16))//    TRUE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 12)) //   TRUE
console.log(binarySearchRecursive([8], 8))//   TRUE