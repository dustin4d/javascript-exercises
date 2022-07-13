const removeFromArray = function(givenArray, givenNum) {
    const index = givenArray.indexOf(givenNum);
    if (index > -1) {
        givenArray.splice(index, 1);
    }
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
