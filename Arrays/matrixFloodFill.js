function floodFill(canvas, x, y, target) {
    var temp = canvas[y][x];
    canvas[y][x] = target;
    
    if(x > 0){
        if( canvas[y][x-1] == temp ){
            floodFill(canvas, x-1, y, target);
        }
    }
    if(y>0){
        if( canvas[y-1][x] == temp ){
            floodFill(canvas, x, y-1, target);
        }
    }
    if(x< canvas[y].length-1){
        if( canvas[y][x+1] == temp ){
            floodFill(canvas, x+1, y, target);
        }
    }
    if(y< canvas.length-1){
        if( canvas[y+1][x] == temp ){
            floodFill(canvas, x, y+1, target);
        }
    }
}

test_input_a = [[3, 2, 4, 4, 4], 
                [4, 4, 4, 3, 3], 
                [4, 14, 1, 4, 4]]
                
floodFill(test_input_a, 2, 1, 0)
console.log(test_input_a);