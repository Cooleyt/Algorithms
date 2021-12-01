function isIsogram(str){
    let characters = [];
    let lowerStr = str.toLowerCase()
    for(let i = 0; i < str.length ;++i){
        if(characters.includes(lowerStr[i])){
            return false;
        }
        characters.push(lowerStr[i]);
    }
    return true;
}


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("mo0se"));