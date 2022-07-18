const ftoc = function(temp) {
  let toCelsius = (temp - 32) * 5 / 9;
  let rounded = Math.round(toCelsius * 10) / 10;
  let fixed = rounded.toFixed(1);
  return parseFloat(fixed);
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
