//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    let left = 0;
    let right = 0;
    let total = [];
    while(left < leftArr.length || right < rightArr.length){
            
        if (leftArr[left] < rightArr[right]){
            total.push(leftArr[left]);
            ++left;
        }
        if (leftArr[left] > rightArr[right]){
            total.push(rightArr[right]);
            ++right;
        }
        if (left == leftArr.length){
            total.push(rightArr[right]);
            ++right;
        }
        else if (right == rightArr.length){
            total.push(leftArr[left]);
            ++left;
        }
        console.log(left);
        console.log(right);
    }
    return total;
}

const mergeSort = (arr) => {
    console.log(arr);
    if(arr.length <= 1) return arr;
    let leftHalf = arr.slice(0, Math.floor(arr.length/2));
    let rightHalf = arr.slice(Math.floor(arr.length/2));
    return combine(mergeSort(leftHalf),mergeSort(rightHalf));
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));