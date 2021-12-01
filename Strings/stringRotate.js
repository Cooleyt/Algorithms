//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my shoe"
const rotateString = (str, num) => {
    output = "";
    for(var i = (str.length-num); i < str.length; ++i){
        output += str[i];
    }
    for(var i = 0; i < str.length-num; ++i){
        output += str[i];
    }
    return output
}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// // -> returns true

const isRotation = (str1, str2) => {
    var start = 0;
    var position = 0;
    var j = 0;
    var output = "";
    if(str1.length != str2.length){
        return false;
    }
    while(start < str1.length){
        if (position >= str1.length){
            position = 0;
        }
        if (str1[j] == str2[position]){
            output += str2[position];
            ++j;
            ++position;
            console.log(output);
        }else{
            j = 0;
            ++start;
            position = start;
            output = "";

        }
        if (output == str1){
            return true;
        }
    }
    return false;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes todayx", "es today?Did I shine my sho"));