function createPhoneNumber(numbers){
    var groups = ["","",""]
    numbers.map((num,i) => {
        if(i<3){
            groups[0] += num;
        }else if(i>=3 && i<6){
            groups[1] += num;
        }else{
            groups[2] += num;
        }
    });
    return  `(${groups[0]}) ${groups[1]}-${groups[2]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));