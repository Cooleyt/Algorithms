//A narcissistic number in a given number base b is a number that is the sum of its own digits each raised to the power of the number of digits.

//Approach
// We will first count the number of digits using a while loop. Then with another while loop, we pick last digit of the number and add its (count) th power to a variable sum. After the loop we return a boolean checking whether the sum is equal to the number or not.

function narcissistic(value) {
    sum = 0;
    str = String(value);
    for(let i = 0; i < str.length; ++i){
        sum += Math.pow(str[i],str.length);
    }
    return sum == value;
}
console.log(narcissistic(153));