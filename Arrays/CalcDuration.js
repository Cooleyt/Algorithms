function formatDuration(seconds) {
    let outputPieces = [];
    let output = ''
    let comps = { 31536000: ['year', 0], 86400: ['day', 0], 3600: ['hour', 0], 60: ['minute', 0], 1: ['second', 0] };
    let keys = Object.keys(comps);
    if (seconds === 0) return "now";
    for (let i = keys.length - 1; i >= 0; --i) {
        if (seconds >= keys[i]) {
            comps[keys[i]][1] = Math.floor(seconds / keys[i]);
            outputPieces.push(comps[keys[i]][1] > 1 ? `${comps[keys[i]][1]} ${comps[keys[i]][0]}s` : `${comps[keys[i]][1]} ${comps[keys[i]][0]}`);
            seconds = seconds % keys[i];
        }
    }
    outputPieces.forEach((piece, idx) => {
        if (idx === 0) {
            output += piece;
        } else {
            output += idx === outputPieces.length - 1 && idx != 0 ? ` and ${piece}` : `, ${piece}`;
        }
    });
    return output;
}

console.log(formatDuration(0))//, "1 second");
console.log(formatDuration(62))//, "1 minute and 2 seconds");
console.log(formatDuration(120))//, "2 minutes");
console.log(formatDuration(3600))//, "1 hour");
console.log(formatDuration(3662))//, "1 hour, 1 minute and 2 seconds");