const reverseString = function(_str) {
    let arr = [];
    for (let i = _str.length; i >= 0; i-- ) {
        arr.push(_str.charAt(i));
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
