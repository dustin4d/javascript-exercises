const sumAll = function(min, max) {

    // Swap values if min is bigger than max.
    if(min > max) {
        [min, max] = [max, min];
    }
    if (typeof(min) !== 'number' || typeof(max) !== 'number') {
        return "ERROR";
    }

    let finalNum = ((max - min) + 1) * (min + max) / 2;

    if(finalNum < 0 ) {
        return "ERROR";
    }
    return finalNum;
};

sumAll(10,"90");

// Do not edit below this line
module.exports = sumAll;
