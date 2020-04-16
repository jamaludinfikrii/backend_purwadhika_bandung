const express = require('express')
const app = express()

const port = 4000
const authRouter = require('./routers/authentication')

app.use(express.json())

app.use('/auth',authRouter)

// initial route
app.get('/' , (req,res) => {
    res.send('<h1>Selamat Datang di Api Auth</h1>')
})

app.listen(port , () => console.log('server run on port ' + port))