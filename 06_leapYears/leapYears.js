const leapYears = function(givenYear) {
    const leap = new Date(givenYear, 1, 29).getDate() === 29;
    if (leap) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
