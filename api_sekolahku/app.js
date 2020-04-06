const express = require('express')
const cors = require('cors')
const db = require('./3_databases/mysql')
const routerGuru = require('./2_routers/guru')
const routerPelajaran = require('./2_routers/pelajaran')

// Setting Express And JSON Parser dan cors
const port = 4000
const app = express()
app.use(express.json())
app.use(cors())




app.get('/' , (req,res) => {
    res.send('Seleamat Datang di API Sekolahku')
})


app.use('/guru' , routerGuru)
app.use('/pelajaran',routerPelajaran )
 






app.listen(port , () => console.log('Server Run On Port ' + port))