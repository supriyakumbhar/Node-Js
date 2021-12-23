const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3f0392938454e4966430f0379739ab7e&query=37.8267,-122.4233'

request({ url: url},(error,response) => {

     const data = JSON.parse(response.body)
     console.log(data.current)
     
})