const removeFromArray = function(_arr, ...removals) {
    // need a clean way to deal with a variable number of arguments.
    //      The arguments object would work, but the spread syntax is much neater.
    // need .indexOf to know if something is actually a match
    // need .splice for clean removals
    // Because I'm modifying the array as I go, I'm going to start at the high end and go backwards
    // AND, I'm going to make ONE pass backwards, comparing it to an array *made fom the rest of the arguments*

    // 1. I fogot that .splice() doesn't return a modified array, it returns REMOVALS. It modifies the array!
    // 2. I completely brainfarted and tried to use = for equality so I immediately just threw out my arguments
    if ((_arr.length == 0) || (removals.length == 0)) { // quick return on empty inputs
        return _arr;
    } 
    for (i = _arr.length - 1; i >= 0; i--) {
        if (removals.indexOf(_arr[i]) != -1) {
            _arr.splice(i, 1);
        }
    }
    return _arr
}

// Do not edit below this line
module.exports = removeFromArray;
