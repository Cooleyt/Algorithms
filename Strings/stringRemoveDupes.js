//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!

const dedupe = (str) => {
    var charArr = [];
    var output = "";
    for (var i = str.length-1; i >= 0 ;--i){
        if(!find(charArr,str[i])){
            charArr.push(str[i]);
            output = str[i] + output;
        }
    }
    return output;
}

const find = (arr, letter) =>{
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] == letter){
            return true;
        }
    }
    return false;
}


console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));