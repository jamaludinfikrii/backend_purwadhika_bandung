const express = require('express')
const cors = require('cors')
const BearerToken = require('express-bearer-token')
const app = express()
const port = 4000
const authRouter = require('./routers/authentication')
const productRouter = require('./routers/products')


app.use(BearerToken())
app.use(cors())
app.use(express.json())

app.use('/auth',authRouter)
app.use('/product',productRouter)

// initial route
app.get('/' , (req,res) => {
    res.send('<h1>Selamat Datang di Api Auth</h1>')
})

app.listen(port , () => console.log('server run on port ' + port))