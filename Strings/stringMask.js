// return masked string
function maskify(cc) {
    output =""
    for(var i = 0; i < cc.length; ++i){
        if(i < cc.length-4){
            output += "#"
        }else{
            output += cc[i]
        }
    }
    return output;
}

console.log(maskify("4556364607935616"));
console.log(maskify(     "64607935616"));
console.log(maskify(               "1"));
console.log(maskify(                ""));