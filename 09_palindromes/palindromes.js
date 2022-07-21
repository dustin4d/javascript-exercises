const palindromes = function (givenString) {
    /* Save string as a variable, then .split() all it's characters into 
    an array. Then, reverse the order of the arrayed string. After this,
    .join() the array back together as the reversed string. Save that to 
    a variable. Lastly, compare the givenString to the reversed word, and 
    if it returns true, then the word is a palindrome. */

    let arrayed = givenString.split("");
    let reversed = arrayed.reverse();
    let joined = reversed.join("");
    let returnedString = joined.toString();

    console.log(`joined = ${joined}. givenString = ${givenString}`);

    if(givenString == returnedString) {
        return true;
    } else if( !!returnedString.match(/[.,:!?]/))
        return true;
};
palindromes('racecar!');

// Do not edit below this line
module.exports = palindromes;
