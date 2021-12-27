const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('new york',(error,data) => {
    console.log('error',error)
    console.log('data',data)

forecast(-75.7088, 44.1545, (error,data) => {
    console.log('Eroor', error)
    console.log('Data', data)
})

})