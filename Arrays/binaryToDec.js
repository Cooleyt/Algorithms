const binToDec = (str) => {
    var output = 0;
    for(var i = 0; i < str.length; ++i){
        output += (str[i]*Math.pow(2,(str.length - i -1)))
    }
    return output;
}

console.log(binToDec("1010101"));
console.log(binToDec("100011"));
console.log(binToDec("100"));
console.log(binToDec("1000"));
console.log(binToDec("1111"));
console.log(binToDec("110101011"));