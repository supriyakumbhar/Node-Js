const path = require('path')
const express = require('express')


//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//app.get('' ,(req, res)  => {
    //res.send('<h1>Weather</h1>')

//})

app.get('/help',(req, res) => {
    res.send([{
        name: 'Supriya'
    }, {
        name: 'kumbhar'
    }])
        
    })

app.get('/about', (req, res) => {
res.send('<h1>this is about page</h1>')
})

app.get('/weather', (req, res) => {
    res.send ({
        forecast: 'it is raining',
        location: 'New York'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})