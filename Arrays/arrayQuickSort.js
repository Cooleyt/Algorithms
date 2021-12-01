// For this array, the pivot is the value 3.
// Notice that the pivot may be placed anywhere in the array, not necessarily in the center.
// // [1, 3, 5, 4, 8, 30, 20, 17, 7]

// // For this array, the pivot is the value 8.
// // Notice that the values are not sorted, but everything to the left of 8 is smaller than 8. 
// // Everything to the right is larger than 8.
// //  
// [25, 3, 5, 4, 8, 30, 20, 17, 7,9, 10, 100];
// [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ]
var arr = [
    1, 4, 5, 1,
    3, 4, 2, 6
];
// var pivot = arr => Math.ceil(Math.random() * arr.length)-1;
// var p = pivot(arr);
var i = 0;
var j = arr.length - 1;
const quickSort = (i, j) => {
    let p = Math.floor(Math.random() * (j - i)) + i;
    console.log(`pivot value = ${arr[p]}`)
    console.log(`pivot index = ${p}`)
    let start = i;
    let end = j;
    let pivot = arr[p]
    while (i < j) {
        console.log(i);
        console.log(j);
        console.log(arr);
        if (arr[i] >= pivot && arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            if(i===p){
                p = j;
            }else if(j===p){
                p = i;
            }
        }
        if (arr[i] <= pivot && i != p) {
            ++i
        }
        if (arr[j] >= pivot && j != p) {
            --j
        }

    }
    console.log(arr);
    if (start != j) {
        quickSort(start, j - 1)
    }
    if (end != i) {
        quickSort(i + 1, end)
    }
};
quickSort(i, j);
console.log(arr);

// const partition = (arr) => {
//     var i = 0;
//     var j = arr.length-1;
//     quickSort(i,j)


// }
// //looping through the array from 0 to arr.length,
// //shift a value in the array back to the place it belongs
// //the value to shift should increment with each loop iteration
// //follow this example for each step, with the current value in ()
// //step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
// //step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
// //step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
// //step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
// //step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
// //and so on...
// const insertionSort = (arr) => {
//     var unsorted = true;
//     while(unsorted){
//         unsorted = false;
//         var num;
//         for(let i = 0;i < arr.length;++i){
//             if(arr[i]>arr[i+1]){
//                 num = i+1;
//                 unsorted = true;
//                 break;
//             }
//         }
//         for(let i = 0; i< arr.length; ++i){
//             if(arr[i]>arr[num]){
//                 let val = arr[num];
//                 arr = [val,...arr.slice(0,num),...arr.slice(num+1,arr.length-1)];
//             }
//         }
//         console.log(arr);
//     }
//     return arr;
// }
// console.log(insertionSort([6,4,5,2,8,14,1,3]));