const convertToCelsius = function(temp) {

  const inCelsius = (temp - 32) / 1.8;
  return Number(inCelsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {

  const inFahrenheit = temp * 1.8 + 32;
  return Number(inFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
