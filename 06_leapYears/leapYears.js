const leapYears = function(yrs) {
    if (yrs % 4 == 0) {
        if (yrs % 100 == 0) {
            if (yrs % 400 == 0) {
                return true;
            }
        }
        else {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
