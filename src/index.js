const express = require('express')
const app = express()
const userRouter = require('./routers/users')
require('./database/mongoose')
port = process.env.PORT

app.use(express.json())
app.use(userRouter)


app.listen( port, () => {
    console.log('Application running on port ' + port)
})
