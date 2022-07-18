const ftoc = function(temp) {
  let toCelsius = (temp - 32) * 5 / 9;
  let rounded = Math.round(toCelsius * 10) / 10;
  let fixed = rounded.toFixed(1);
  return parseFloat(fixed);
};

const ctof = function(temp) {
  let toFahrenheit = (temp * 9 /5 + 32);
  let rounded = Math.round(toFahrenheit * 10) / 10;
  let fixed = rounded.toFixed(1);
  return parseFloat(fixed)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
