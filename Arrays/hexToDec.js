//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    let output = 0;
    const values = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15};
    for(let i = 0; i < str.length ;++i){
        output += (values[str[i]])*Math.pow(16,(str.length - i -1));
    }
    return output;
}

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
    let output = ''
    const values = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    while(val){
        output = values[val%16] + output;
        val = Math.floor(val/16)
    }
    return output;
}

let test1 = 108;
let test2 = 420;

console.log(decToHexStr(test1));
console.log(decToHexStr(test2));
console.log(hexStrToDec(decToHexStr(test1)));
console.log(hexStrToDec(decToHexStr(test2)));