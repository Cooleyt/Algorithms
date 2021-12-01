function reverseSting(input){
    var output = "";
    for(var i = 0; i < input.length; i++){
        output += input[input.length-(i+1)];// 5
    }
    return output;
}
var input = "hello!";
console.log(reverseSting(input));



function reverseSting2(input){
    var output = "";
    for(var i = input.length; i > 0; i--){
        output += input[i-1];
    }
    return output;
}
var input = "hello!";
console.log(reverseSting2(input));



function reverseString3(input) {
    var newString = ""
    for (let i = input.length - 1; i >= 0; i--) {
        newString += input[i]
    }
    return newString
}

var input = "hello!";
console.log(reverseString3(input));