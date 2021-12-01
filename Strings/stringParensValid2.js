var isValid = function(s) {
    let open = [];
    let lefts = new Map([['(',''],['{',''],['[','']]);
    let rights = new Map([[')','('],['}','{'],[']','[']]);
    for(const char of s){
        if(lefts.has(char)){
            open.push(char);
        }else if(rights.get(char) === open[open.length-1]){
            open.pop();
        }else if(rights.has(char)){
            return false;
        }
    };
    return open.length > 0 ? false : true;
};

console.log(isValid('()[{}'));