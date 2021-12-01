// You have 2 eggs...
// You have a 100 story building and you have to figure out where they will break when dropped from certain floors. Goal is to find out the highest floor they will not break from in minimum attempts. 

// 1 floor: 1 drop 
// 2 floors : 2 drop
// 3 floors : 2 drops 
// 4 floors : 3 drops 
// 5 floors : 3 drops 
// 6 floors : 3 drops
// 7 floors : 4 drops
// 8 floors : 4 drops 
// 9 floors : 4 drops
// 10 floors : 4 drops

function drops(floors){
    var drops = 1;
    var counter = drops
    for(var i = 0 ;  i < floors; i++){
        if(!counter){
            drops++
            counter = drops
        }
        counter--
    }
    return drops
}
console.log(drops(1000))