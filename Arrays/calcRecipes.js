function cakes(recipe, available) {
    let toMake = [];
    let recipeKeys = Object.keys(recipe);
    let availKeys = Object.keys(available);
    for(var i = 0; i < recipeKeys.length ;++i){
        // console.log(key);
        // console.log(!availKeys.includes(key));
        if(!availKeys.includes(availKeys[i])){
            return toMake.push(0);
        }
        return toMake.push(Math.floor(available[availKeys[i]]/recipe[availKeys[i]]));
    };
    console.log(toMake)
    return Math.min(...toMake);
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1},
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
//     {sugar: 500, flour: 2000, milk: 2000}));