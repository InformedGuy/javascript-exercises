const leapYears = function(year) {

    const isCentury = year % 100 === 0;

    if (year % 4 === 0 && !isCentury || year % 400 === 0) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = leapYears;
