const repeatString = (string, num) => {
	let fullString = '';
	for(let i = 0; i < num; i++) {
		fullString += string;
	}
	if (num < 0) {
		fullString = 'ERROR';
	}
	return fullString;
}
// Do not edit below this line
module.exports = repeatString;
