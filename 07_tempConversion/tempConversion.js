const convertToCelsius = function(farhenheit) {

  const celsius = (((farhenheit-32) * 5) / 9);
  return Math.round(celsius * 10) / 10;

};

const convertToFahrenheit = function(celsius) {

  const farhenheit = ((celsius * 9/5) + 32)
  return Math.round(farhenheit * 10)/ 10;
};

convertToCelsius(97.8);


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
