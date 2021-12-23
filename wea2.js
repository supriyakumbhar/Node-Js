const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3f0392938454e4966430f0379739ab7e&query=37.8267,-122.4233&units=f'

request({ url: url, json:true},(error,response) => {

    console.log(response.body.current.weather_descriptions[0] + ".it is currently"  +  response.body.current.temperature +  "degress out. it feels like" + response.body.current.feelslike + "% chance of rain.")
    // console.log(data.current)
    //console.log(response.body.current)
     
})