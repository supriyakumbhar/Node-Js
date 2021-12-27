const request = require('request')

const forecast = (latitude,longitude,callback) => {
       const url = 'http://api.weatherstack.com/current?access_key=3f0392938454e4966430f0379739ab7e&query=' + latitude + ',' + longitude + 'units=f'
       request({url, json: true},(error, {body}) => {
           if(error){
            callback('unable to connet to weather services', undefined)    

           }
           else if(body.error){
            callback('unable to find location', undefined)
           }
           else {
               callback(undefined,body.current.weather_descriptions[0] + ".it is currently"  +  body.current.temperature +  "degress out. it feels like" + body.current.feelslike + "% chance of rain.")

           }

       })

}

module.exports = forecast