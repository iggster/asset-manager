const express = require('express')
const app = express()
port = process.env.PORT || 3000


app.get('/', (req,res) => {
    res.status(200).send('App up and running.')
})


app.listen( port, () => {
    console.log('Application running on port ' + port)
})