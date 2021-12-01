//The JavaScript modulo operator returns the remainder of a division sum. To calculate the remainder of a division sum, use the percentage sign (%). The syntax for the modulo operator is: (number_one % number_two).
function solution(number){
    sum = 0;
    if(num < 0){
        return sum;
    }
    for(var num = 0;num<number; ++num){
        if(num%3 === 0 || num%5 === 0){
            sum += num;
        }
    };
    return sum;

}

console.log(solution(10));