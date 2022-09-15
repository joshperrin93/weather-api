const got = require('got');
const apiKey = 'b04c18e0fb0ed70859f1710ae12358e3'; // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].main);
});

console.log('Requesting weather data');