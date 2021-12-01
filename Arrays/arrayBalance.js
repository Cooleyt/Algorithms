// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    let sum = 0;
    let secondSum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    if(sum%2 !== 0){
        return false;
    }
    for(let i = 0; i < arr.length; ++i){
        sum -= arr[i];
        secondSum += arr[i];
        if(sum === secondSum){
            return true;
        }
    }
    return false;
}
// console.log(balancePoint([1,2,3,4,10])) 
// // ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(balancePoint([1,2,3,2,1])) 
// console.log(balancePoint([1,2,3,1,2,3,2,1])) 
// console.log(balancePoint([2,2,2,2])) 

function balanceIndex(arr) {

    if(arr.length < 3){
        return false;
    }
    let leftSum = arr[0];
    let rightSum = arr[arr.length-1];
    let j = arr.length-1;
    let i = 0;
    while(i < arr.length-1){
        // console.log(leftSum);
        // console.log(rightSum);
        // console.log(i);
        if(leftSum === rightSum && i == j-2){
            return true;
        }else if(i == j-2){
            --j;
            i = 0;
            rightSum += arr[j];
        }else{
            ++i
            leftSum += arr[i];
        }
    }
    return false;

}

console.log(balanceIndex([-2,5,7,0,3]))  
console.log(balanceIndex([9,9])) 
console.log(balanceIndex([4,2,2,6])) 
console.log(balanceIndex([9,1,9])) 
console.log(balanceIndex([1,8,1,2,3,4])) 