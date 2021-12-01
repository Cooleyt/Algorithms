const isPangram = (str) => {
    console.log(new Set(format(str)));
    console.log(new Set(format(str)).size);
    return new Set(format(str)).size == 26;
}

const isPerfectPangram = (str) => {
    return new Set(format(str)).size == 26 && format(str).length == 26;
}

function format(string) {
    return string.toUpperCase().replace(/[^A-Z]/g, '');
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));

console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzab cde.fghijkLMNOP"));//should be true