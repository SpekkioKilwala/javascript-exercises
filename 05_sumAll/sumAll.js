const sumAll = function(a, b) {
    // check that a and b are both STRICTLY numbers
    
    // Work out the algorithm: I happen to know that you pair up the highest and lowest numbers
    // 1, 4 -> 1, 2, 3, 4
    // 1+4 + 2+3 = (smallest + largest)*2
    // 3, 5 -> 3, 4, 5
    // (3+5)*1 + 4

    // pair = a+b
    // middle = avg(a, b)
    //  2 -> 1 pair, odd (middle term YES)
    //  3 -> 2 pair, even
    //  4 -> 2 pair, odd
    //  5 -> 3 pair, even
    // badVariableName = (b-a+1)/2
    let middle = 0
    if (typeof a != "number" || a < 0 || typeof b != "number" || b < 0) {
        return "ERROR"
    }
    if (a > b) {
        b = [a, a = b][0]; // this apparently reverses two variables, so b is definitely the bigger one now
    }
    let pair = a + b;
    let badVariableName = (b-a+1)/2;
    let pairs = Math.floor(badVariableName);
    if (badVariableName != pairs) {
        middle = (a + b)/2;
    }
    return (pair * pairs + middle)
};

// Do not edit below this line
module.exports = sumAll;
