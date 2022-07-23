const palindromes = function (str) {
    let regex = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regex, '');

    for(let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return true;
        } else {
            return false;
        }
    }
   
};



// Do not edit below this line
module.exports = palindromes;
