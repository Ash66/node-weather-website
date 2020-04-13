const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/75b04647cc9be57d5ac07c48154e2b0e/' + latitude + ',' + longitude + '?units=auto'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. The max temperature today is ' + body.daily.data[0].temperatureHigh+' with a minimum temperature of '+ body.daily.data[0].temperatureLow+' There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast