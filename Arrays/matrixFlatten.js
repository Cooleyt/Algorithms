var arr = [
    [2,7,1],
    [9,0,-13],
    [7,7,2]
]

var num = 0;

isPresent(arr,num);

function isPresent(arr2d, value){
    for( var y = 0; y < arr2d.length; ++y){
        for(var x = 0; x < arr2d[y].length; ++x){
            if(arr2d[y][x] == value){
                return console.log("Found It");
            }
        }
    }
    return false;
}


function flatten(arr2d){
    var flat = [];
    for(var i = 0; i< arr2d.length;++i){
        for(var j = 0; j < arr2d[i].length; ++j){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten([[2,5,8],[3,6,1],[5,7,7]]);
console.log(result);