function dirReduc(arr){
    let i =0;
    let begin = false;
    while(i < arr.length){
        if((arr[i] == "NORTH" &&  arr[i+1] == "SOUTH") || arr[i+1] == "NORTH" &&  arr[i] == "SOUTH"){
            arr = [...arr.slice(0,i),...arr.slice(i+2,arr.length)]
            begin = true;
        }
        if((arr[i] == "WEST" &&  arr[i+1] == "EAST") || arr[i+1] == "WEST" &&  arr[i] == "EAST"){
            arr = [...arr.slice(0,i),...arr.slice(i+2,arr.length)]
            begin = true;
        }
        if(begin){
            i = 0;
            begin =false
        }else{
            ++i;
        }
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));