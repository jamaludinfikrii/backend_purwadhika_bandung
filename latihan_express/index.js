const express = require('express')
const app = express()
const port = 8888

// API ==> Express js

const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'localhost',
    user : "root",
    password : "111111111",
    port : 3306,
    database : "sekolahku"
})


// buat nangkep data dari req.body
app.use(express.json()) 




// HTTP METHODE
 // GET  ==> NGAMBIL DATA
 // POST ==> CREATE DATA
 // DELETE ==> DELETE DATA
 // PATCH  ==> UPDATE DATA

//  CRUD 



// request  => Nangkep data dari luar
    // req.params
    // req.body
    // req.query
// respond  => Kirim data Ke Luar

// app.httpmethod('route', 'function')
app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/fikri',(req,res) => {
    res.send('Hello Fikri')
})

app.get('/contoh/:nama' , (req,res) => {
    const nama  = req.params.nama
    res.send('Hello ' + nama)
})

app.get('/request-query', (req,res) => {
    const nama = req.query.nama
    const alamat = req.query.alamat

    res.json({
        nama,
        alamat
    })
})

// app.use(express.json()) 

app.post('/contoh-post' , (req,res) => {
    const data = req.body
    console.log(data)
    res.send('contoh post')
})

// Axios.get(urlAPi + 'request-query?nama=' + nama + '&alamat=' + alamat)
// .then((res) => {
//     console.log(res.data)
// })


// postman => untuk nyoba nyoba route yang sudah di bikin di api
// route baru
app.get('/guru' , (req,res) => {

    // conn.query( sql,  )
    conn.query('select * from guru;' , (err,data) => {
        if(err) throw err
        res.json({
            bebas : data
        })
    })
})


// get data guru by id
app.get('/guru/:id' , (req,res) => {
    const id = req.params.id

    let sql = 'select * from guru where id = ' + id 
    conn.query(sql,(err,result) => {
        if(err) throw err
        res.json({
            data : result
        })
    })
})


app.get('/get-guru-by-gender' , (req,res) => {
    const gender = req.query.gender
    let sql = `select * from guru where gender ="${gender}" ;`
    conn.query(sql,(err,result) => {
        if(err) throw err
        res.json({
            data : result
        })
    })
})






// CRUD

// REFACTOR






app.listen( port, () => console.log('Server Run at port ' + port))


