//Loop Solution
function numberOfRectangles(m, n) {
    let counts = [0, 0];
    while (m > 0 || n > 0) {
        if (m > 0) {
            counts[0] += m;
            --m;
        }
        if (n > 0) {
            counts[1] += n;
            --n;
        }
    }
    return counts[0] * counts[1];
}


//Math Solution
function numberOfRectangles(m, n) {
    return (m * m + m) * (n * n + n) / 4; 
}