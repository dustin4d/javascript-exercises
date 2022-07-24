const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let next;
    let seq = [];

    for(let i = 0; i <= num; i++) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        seq.push(num1);
    }
    console.log(seq);
    return seq[num];
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
