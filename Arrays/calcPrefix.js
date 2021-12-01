
const calcPrefix = (arr) =>{
    results = [];
    for(let i = 0; i < arr.length; ++i){
        if(isNaN(arr[i])&&isNaN(arr[i+1])){
            results.push(arr[i]);
        }else if(isNaN(arr[i])&&!isNaN(arr[i+1])&&!isNaN(arr[i+2])){
            if(arr[i] == '+'){
                results.push(arr[i+1]+arr[i+2]);
                console.log(results);
            }else if(arr[i] == '-'){
                results.push(arr[i+1]-arr[i+2]);
                console.log(results);
            }else if(arr[i] == '*'){
                results.push(arr[i+1]*arr[i+2]);
                console.log(results);
            }else if(arr[i] == '/'){
                results.push(arr[i+1]/arr[i+2]);
                console.log(results);
            }
            i =i+2
        }else{
            results.push(arr[i]);
            console.log(results);
        }
        if(isNaN(results[0])&&!isNaN(results[1])&&!isNaN(results[2])){
            results= [calcPrefix(results)];
        }
    }
    return results[0];
}

console.log(calcPrefix(['+',5,10])); //15
console.log(calcPrefix(['+','*',6,4,20])); //44
console.log(calcPrefix(['+','+','*',8,4,'/',20,5,'+','*',8,4,'/',20,5])); //44