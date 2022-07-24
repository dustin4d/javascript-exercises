const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let next;
    let seq = [];


    // if fibonacci(num) is a negative number, return false
    if(num < 0) {
        return "OOPS";
    }
    // initialize the array with 0 and 1
    seq.push(num1, num2);

    for(let i = 0; i <= num; i++) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        seq.push(next);
    }
    return seq[num];
};

// Do not edit below this line
module.exports = fibonacci;
