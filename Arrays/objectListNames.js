function list(names) {
    var output = ""
    names.map((obj, i)=> {
        if(names.length >=2 && i == names.length-1){
            output += ` & ${obj.name}`;
        }else if(i === 0){
            output += `${obj.name}`;
        }else{
            output += `, ${obj.name}`;
        }
    });
    return output;  
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]));
// returns 'Bart'

console.log(list([]));
// returns ''