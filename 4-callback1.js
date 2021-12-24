const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoic3Vwa3VtMTIzIiwiYSI6ImNreGswZGhkYTB4dGwyeXBlNGxzcnY5emwifQ.8jvH8uK0dFm8bLwtOiFJPA&limit=1'
       request({url: url, json: true}, (error,response) =>{
           if(error){
               callback('unable to connect to location', undefined)
           }else if (response.body.features.length === 0){

           callback('unable to find location. Try another search.',undefined)
    }else {
        callback(undefined, {
            lattitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name

        })
    }

       })
}

geocode('new york',(error,data) => {
    console.log('error',error)
    console.log('data',data)

})