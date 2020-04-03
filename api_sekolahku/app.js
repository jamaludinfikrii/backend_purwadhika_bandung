const express = require('express')
const mysql = require('mysql')

// Setting Express And JSON Parser
const app = express()
app.use(express.json())

const port = 4000


// Setting Database Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "111111111",
    port : 3306,
    database : "sekolahku"
})

app.get('/' , (req,res) => {
    res.send('Seleamat Datang di API Sekolahku')
})


// CRUD

// READ
app.get('/getdataguru' , (req,res) => {
    let sql = 'select * from guru;'

    db.query(sql , (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
})

app.get('/getdatagurubyid' , (req,res) => {
    let id = req.query.id

    if(id > 0){
        let sql = 'select * from guru where id = ?;'
        db.query(sql,id,(err,result) => {
            try{
                if(err) throw err
                res.json({
                    error : false,
                    data : result
                })

            }catch(err){
                res.json({
                    error : true,
                    message : err.message
                })
            }
        }) 
    }

})



// CREATE

app.post('/addnewguru' , (req,res) => {
    let data = req.body
    console.log(data)
    // let sql = `insert into guru (nama,umur,gender,) 
    // values ('${data.nama}',${data.umur},'${data.gender}');`

    let sql = 'insert into guru set ?;'

    // console.log(data)
    // console.log(sql)
    db.query(sql,data,(err,result) => {
        try{
            if(err) throw err
            console.log(result)
            res.json({
                error : false,
                message : "Add Data Success",
                data : {
                    nama : data.nama,
                    umur : data.umur,
                    gender : data.gender
                }
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
    
})


// UPDATE 

app.patch('/editdataguru/:id' , (req,res) => {
    let data = req.body
    let id = req.params.id
    let sql = 'update guru set ? where id = ?'

    db.query(sql,[data , id], (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                message : 'Edit Data Success',
                data : data
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })

    console.log(data)
})


// DELETE

app.delete('/deletegurubyid/:id' , (req,res) => {
    let id = req.params.id

    let sql = 'delete from guru where id = ?'
    db.query(sql,id,(err,result) => {
        try{
            if(err) throw err
            let sql = 'select * from guru;'
            db.query(sql, (err,result) => {
                try{
                    if(err) throw err
                    res.json({
                        error : false,
                        message : "Delete Data Success",
                        data : result
                    })
                }catch(err){
                    res.json({
                        error : true,
                        message : err.message
                    })
                }
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
})


// 






app.listen(port , () => console.log('Server Run On Port ' + port))