// var floor = Math.floor(1.8);
// var ceiling = Math.ceil(Math.PI);
// var random = Math.random();

// console.log(floor);
// console.log(ceiling);
// console.log(random);

// function rollDie{
//     var roll = Math.floor(Math.random()*6)+1;
//     return roll;
// }

// var playerRoll = rollDie();
// console.log(playerRoll);


// const tests = 1000;
// const range = 20;
// const offset = 20;

// const counts = {}
// for(var i = 0; i<= range; i++){

// }

function magicEightBall(){
    var results = [];
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
        "help me, I'm stuck in this magic 8 ball!!!!"
    ];
    for(var i = 0; i< 10; i++){
        results.push(lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]);
    }
    return results;
}
console.log(magicEightBall());