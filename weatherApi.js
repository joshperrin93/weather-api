const got = require('got')
const apiKey = require('./apiKey')

class WeatherApi {
    fetchData(city, callback) {
        const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

        got(url).then((response) => {
            const weatherInfo = JSON.parse(response.body);
            callback(weatherInfo)
        })
    }
}

module.exports = WeatherApi