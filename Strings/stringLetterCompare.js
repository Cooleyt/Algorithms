function mix(s1, s2) {
    var output = "";
    var mixObj = {};
    var tempObj = {};
    var s2Obj = {};
    var activeKey = 0;
    var position = 1;
    s1Formated = s1.replace(/[^a-z]/g, '').toLowerCase();
    s2Formated = s2.replace(/[^a-z]/g, '').toLowerCase();
    for(let i = 0;i < s1Formated.length ;++i){
        if(!mixObj.hasOwnProperty(s1Formated[i])){
            mixObj[s1Formated[i]] = [1,1];
        }else{
            mixObj[s1Formated[i]][1] += 1;
        }
    }
    for(let i = 0;i < s2Formated.length ;++i){
        if(!s2Obj.hasOwnProperty(s2Formated[i])){
            s2Obj[s2Formated[i]] = 1;
        }else{
            s2Obj[s2Formated[i]] += 1;
        }
    }
    let s2Keys = Object.keys(s2Obj);
    for(let i = 0; i<s2Keys.length; ++i){
        if(!mixObj.hasOwnProperty(s2Keys[i])){
            mixObj[s2Keys[i]] = [2, s2Obj[s2Keys[i]]];
        }else if(mixObj[s2Keys[i]][1] === s2Obj[s2Keys[i]]){
            mixObj[s2Keys[i]][0] = "=";
        }else if(mixObj[s2Keys[i]][1] < s2Obj[s2Keys[i]]){
            mixObj[s2Keys[i]] = [2,s2Obj[s2Keys[i]]];
        }
    }
    let mixKeys = Object.keys(mixObj).sort();
    while(mixKeys.length > 0){

        if(mixObj[mixKeys[position]][1] === 1){
            delete mixObj[mixKeys[position]];
            mixKeys = Object.keys(mixObj).sort();
            position = 0;
        }
        if(mixObj[mixKeys[activeKey]][1] < mixObj[mixKeys[position]][1]){
            activeKey = position;
        }
        if(mixObj[mixKeys[activeKey]][1] == mixObj[mixKeys[position]][1] && (mixObj[mixKeys[activeKey]][0] > mixObj[mixKeys[position]][0] || (mixObj[mixKeys[activeKey]][0] == "=" && mixObj[mixKeys[position]][0] != "="))){
            activeKey = position;
        }
        ++position;  
        if(position >= mixKeys.length){
            if(mixObj[mixKeys[activeKey]][1] != 1){
                tempObj[mixKeys[activeKey]] = mixObj[mixKeys[activeKey]];
            }
            delete mixObj[mixKeys[activeKey]];
            mixKeys = Object.keys(mixObj).sort();
            position = 0;
            activeKey = 0;
        }     
    }
    var tempKeys = Object.keys(tempObj);
    tempKeys.map((key,i)=>{
        if(i==tempKeys.length-1){
            output += `${tempObj[key][0]}:${key.repeat(tempObj[key][1])}`
        }else{
            output += `${tempObj[key][0]}:${key.repeat(tempObj[key][1])}/`
        }
    });
    return output
}


one = "my&friend&Paul has heavy hats! &"
two = "my friend John has many many friends &"
console.log(mix(one, two));
//2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss

one = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
two = "my frie n d Joh n has ma n y ma n y frie n ds n&"
console.log(mix(one, two));
// 1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss

// let one = "codewars"
// let two = "codewars"
// console.log(mix(one, two));