//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arrLeft, arrRight) => {
    output = [];
    let i = 0;
    let j = 0;
    while(i < arrLeft.length && j < arrRight.length){
        if(arrLeft[i] < arrRight[j]){
            output.push(arrLeft[i]);
            ++i;
        }else if(arrLeft[i] > arrRight[j]){
            output.push(arrRight[j]);
            ++j;
        }else{
            output.push(arrLeft[i]);
            ++j;
            ++i;
        }
    } 
    return [...output,...arrLeft.slice(i,arrLeft.length),...arrRight.slice(j,arrRight.length)];
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));