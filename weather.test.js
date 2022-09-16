const Weather = require('./weather')
const WeatherApi = require('./weatherApi')
const apiKey = require('./apiKey')

describe('Weather', () => {
    it('fetches the weather in London', async() => {
        const weatherApi = new WeatherApi('London', apiKey)
        const weather = new Weather(weatherApi)

        weather.fetch('London')

        await new Promise(resolve => setTimeout(resolve, 100))

        expect(weather.getWeather().name).toEqual('London')
    })

    it('fetches the weather in London with a mock', async() => {
        const weatherApiMock = { 
            fetchData: (city, callback) => {
                callback({
                    name: 'Cape Town',
                    temp: 20
                })
            }}

        const weather = new Weather(weatherApiMock)

        weather.fetch('London')

        expect(weather.getWeather().name).toEqual('Cape Town')
        expect(weather.getWeather().temp).toEqual(20)
    })
})