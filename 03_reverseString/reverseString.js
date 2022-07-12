const reverseString = function(string) {
	let splitted = string.split("");
	let reversed = splitted.reverse();
	let joined = reversed.join("");
	const finalString = joined;
	return finalString;
};

reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
