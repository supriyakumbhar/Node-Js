const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=3f0392938454e4966430f0379739ab7e&query=37.8267,-122.4233'

//request({ url: url, json:true},(error,response) => {
   // if (error) {
        //    console.log('unable to connect to weather service')
    
    //}else if(response.body.error){
      //  console.log('unable to find location')
    //}
    
   // else {
      //  console.log(response.body.current.weather_descriptions[0] + ".it is currently"  +  response.body.current.temperature +  "degress out. it feels like" + response.body.current.feelslike + "% chance of rain.") 
    //}

//console.log(response.body.current.weather_descriptions[0] + ".it is currently"  +  response.body.current.temperature +  "degress out. it feels like" + response.body.current.feelslike + "% chance of rain.")
//})
const geocodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1Ijoic3Vwa3VtMTIzIiwiYSI6ImNreGswZGhkYTB4dGwyeXBlNGxzcnY5emwifQ.8jvH8uK0dFm8bLwtOiFJPA&limit=1'

request({ url: geocodeurl, json:true},(error,response) => {

    if(error){
        console.log('unable to connet to loaction')
    

    }else{
        const latitude = response.body.features[0].center[0]
          const longitude = response.body.features[0].center[1]
          console.log(latitude, longitude)


    }
          


})
