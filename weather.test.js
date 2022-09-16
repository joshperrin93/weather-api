const Weather = require('./weather')
// const WeatherApi = require('./weatherApi')
const apiKey = require('./apiKey')

describe('Weather', () => {
    it('fetches the weather in London', () => {
        // const weatherApi = new WeatherApi('London', apiKey)
        // const weather = new Weather(weatherApi)

        const weatherApiMock = { 
            fetchData: (city, callback) => {
                callback({
                    name: 'London'
                })
            }}

        const weather = new Weather(weatherApiMock)

        weather.fetch('London')

        expect(weather.getWeather().name).toEqual('London')
    })
})