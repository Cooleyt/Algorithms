//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (leftArr,rightArr) => {
    let output = [];
    var i = 0;
    var j = 0;
    var o = 1;
    //find min
    while(i <= leftArr.length && j <= rightArr.length){
        if(leftArr[i] < o){
            o = leftArr[i];
        }
        if(rightArr[j] < o){
            o = rightArr[j];
        }
        console.log(rightArr[j]);
        ++i;
        ++j;
    }

    i = 0;
    j = 0;

    while(output.length < (leftArr.length + rightArr.length)){
        if(leftArr[i] === o){
            output.push(leftArr[i]);
        }

        if(rightArr[j] === o){
            output.push(rightArr[j]);
        }
        ++i;
        ++j;
        if(i >= leftArr.length && j >= rightArr.length){
            o += 1
            i = 0;
            j = 0;
        }
    }
    return output;
}

console.log(intersectUnsorted([6,7,2,7,6,2], [2,7,2,1,2]));
console.log(intersectUnsorted([1,2,2,27,2],[2,2,6,6,7]));
console.log(intersectUnsorted([1,5,9],[2,6,10,0,0,0,1]));
console.log(intersectUnsorted([6,19,0,0,9,32,4],[2,0,6,7,18,0,6,1]));
console.log(intersectUnsorted([23,4,100,108,16,15,2,8,42],[0,4,8,15,-100,42,108,23,16]));