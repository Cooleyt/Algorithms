//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    var word = ""
    var output = []
    for(var i = 0; i < str.length; ++i){
        if(str[i] != " "){
            word += str[i];
        }
        else if(word.length != 0){
            output.push(word);
            word = "";
        }
    }
    if(word.length != 0){
        output.push(word);
    }
    return output;
}

console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    var word = "";
    var array = [];
    var output = "";
    for(var i = 0; i < str.length; ++i){
        if(str[i] != " "){
            word += str[i];
        }
        else if(word.length != 0){
            array.push(word);
            word = "";
        }
    }
    if(word.length != 0){
        array.push(word);
    }
    for(var j = array.length-1; j >= 0; --j){
        j != 0 ? output += `${array[j]} ` : output += array[j];
    }
    return output;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));