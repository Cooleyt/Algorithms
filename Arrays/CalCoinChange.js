// generateCoinChange(input)
// input is an integer representing an amount of money
// output is an object representing the most optimal
// (i.e. fewest coins) way to represent that amount
// with standard U.S. coins
// if the input is 74 cents, the output would be:
// {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// if the input is 109 cents, the output would be:
// {quarters: 4, dimes: 0, nickels: 1, pennies: 4}

function generateCoinChange(input) {
    var quarter = 25;
    var dime = 10;
    var nickel = 5;
    var penny = 1;
    var remainder = input; //74

    var numQuarters = 0;
    var numDime = 0;
    var numNickel = 0;
    var numPenny = 0;

    numQuarters = Math.floor(remainder / quarter);
    remainder = remainder % quarter;// 24

    numDime = Math.floor(remainder / dime);
    remainder = remainder % dime;// 4

    numNickel = Math.floor(remainder / nickel);
    remainder = remainder % nickel;// 4

    numPenny = Math.floor(remainder / penny);
    remainder = remainder % penny;// 24


    var output = { 'quarter': numQuarters, 'dime': numDime, 'nickel': numNickel, 'penny': numPenny };
    return output;
}
console.log(generateCoinChange(2))

// generateCoinChangeWithGivenValues(input, values)
// input is an integer representing an amount of money
// values is an array of arrays - each array represents a
// denomination of currency (string) and its value (integer)
// (a denomination of 1 will always be present)
// that array is in order of denomination
// the output is an object representing the most optimal
// way to represent that amount given the denominations
// if the input is 127 cents, and the values are:
// [ ['metadime', 15],
//  ['supernickel', 6]
//  ['very regular penny', 1]]
// the output would be:
// {metadimes: 8, supernickels: 1, very regular pennys: 1}
// (note the pluralization)
// if the input was 127, but the values were:
// [ ['halfquarter', 12],
//  ['greater nickel', 8],
//  ['lesser dime', 3]
//  ['just-a-penny', 1]]
// the output would be:
// {halfquarters: 10, greater nickels: 0, lesser dimes: 2, just-a-pennys: 0}
// if the input was 127, but the values were:
// [ ['half-dollar', 50],
//  ['dime', 10],
//  ['nickel', 5]
//  ['penny', 1]]
// the output would be:
// {'half-dollars': 2, 'dimes': 2, 'nickels': 1, 'pennys': 2}
// (these values -could- be an object, a set of key-value pairs,
// but I want to get you used to the concept of arrays within arrays
// and accessing that data within them)
//
// bonus: what would you do if we couldn't guarantee a denomination of 1
// being present? there are a few different answers, none strictly 'correct'

function generateCoinChangeWithGivenValues(input, values) {
    var remainder = input; //74
    var output = {};
    for (var i = 0; i < values.length; ++i) {
        var label = values[i][0];
        output[label] = Math.floor(remainder / values[i][1]);
        remainder = remainder % values[i][1];
    }
    return output;
}

console.log(generateCoinChangeWithGivenValues(52, [['halfquarter', 12], ['greater nickel', 8], ['lesser dime', 3], ['just-a-penny', 1]]));