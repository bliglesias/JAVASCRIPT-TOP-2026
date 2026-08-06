const convertToCelsius = function(int) {
  // Stole this from Wikipedia
  let fahrenheit = (int - 32) * (5 / 9);

  // Thanks StackOverflow
  return Math.round(fahrenheit * 10) / 10;
};

const convertToFahrenheit = function(int) {
  // Stole this from Wikipedia
  let celsius = int * (9 / 5) + 32;
  return Math.round(celsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
