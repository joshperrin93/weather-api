const WeatherApi = require('./WeatherApi')

class Weather {

    constructor(api) {
        this.api = api;
        this.data = null;
    }

    fetch(city) {
        this.api.fetchData(city, (response) => {
            this.data = response
        })
    }

    getWeather() {
        return this.data
    }

    displayWeather() {
        return `City: ${this.data.name}\nWeather: ${this.data.weather[0].main}\nTemperature: ${this.data.main.temp} C\nFeels Like: ${this.data.main.feels_like} C\nHumidity: ${this.data.main.humidity}%`
    }
}

module.exports = Weather