const repeatString = function(_string, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    } 
    let output = "";
    for (let i = 0; i < repetitions; i++) {
        output = output + _string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
