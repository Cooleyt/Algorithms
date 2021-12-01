var arr = [1,2,3,6,4,5,6];
var one;
var two;
var temp;

//sentry: i

for (var i = 0; i< arr.length/2-1; i++){
    arr[i] += arr[arr.length-(1+i)];; //7
    console.log(arr[i]);

    arr[arr.length-(1+i)] = arr[i] - arr[arr.length-(1+i)]; //1
    console.log(arr[arr.length-(1+i)]);

    arr[i] = arr[i] - arr[arr.length-(1+i)]; //6
    console.log(arr[i]);
}
console.log("No Temp");
console.log(arr);


var arr1 = [1,2,3,6,4,5,6];

for(var i = 0; i < (arr1.length/2)-1; i++){
    temp = arr1[i];
    arr1[i] = arr1[arr1.length-(1+i)];
    arr1[arr1.length-(1+i)] = temp;
}
console.log("Temp");
console.log(arr1);

console.log(3%10);
