const express = require('express')
const mongodb = require('mongodb')

const app = express()
const MongoClient = mongodb.MongoClient;
const PORT = 4000;
const mongoURL = 'mongodb://localhost:27017';
const dbName  = 'toko_baju';

app.use(express.json())


MongoClient.connect(mongoURL, { useUnifiedTopology: true } , (err,result) => {
    if(err) console.log("Connection Failed")
    console.log('Connection Success')

    const db = result.db(dbName)

    // CREATE
    app.post('/users' , (req,res) => {
        const data = req.body // {name : "fikri",email : "jamaludin@fikri.com" ,address : "bandung"}
        if(data.email && data.name && data.address){
            db.collection('users').insertOne(data)
            .then((resp) => {
                res.json({
                    error : false,
                    message : "Add Data Success",
                    data : resp.ops
                })
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            res.json({
                error : true,
                message : "incorrect format data"
            })
        }

    })

    // READ
    // get all users or filter by property value
    app.get('/users' , (req,res) => {
        const address = req.query.address
        const name = req.query.name
        let filter = {}
        if(address) filter.address = address
        if(name) filter.name = name
        console.log(filter)
        db.collection('users').find(filter).toArray()
        .then((resp) => {
            res.json({
                error : false,
                data : resp
            })
        })
        .catch((err) => {
            console.log(err)
        })
    })

    // get by id
    app.get('/user/:id' , (req,res) => {
        const id  = req.params.id
        db.collection('users').findOne({_id : mongodb.ObjectId(id)})
        .then((resp) => {
            // console.log(resp)
            res.json({
                error : false,
                data : resp
            })
        })
        .catch((err) => {
            console.log(err)
        })
    })

    // UPDATE
    // update by id

    app.patch('/user/:id',(req,res) => {
        const data = req.body // {name : "budi",address : "semarang"}
        const id = req.params.id

        db.collection('users').updateOne({_id : mongodb.ObjectId(id)}, {$set : data})
        .then((resp) => {
            db.collection('users').findOne({_id : mongodb.ObjectId(id)})
            .then((resp) => {
                res.json({
                    error : false,
                    message : "edit data Success",
                    data : resp
                })
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })


    })


    // update by prop name

    app.patch('/users' , (req,res) => {
        const address = req.query.address
        const name = req.query.name
        const data = req.body
        let filter = {}
        if(address) filter.address = address
        if(name) filter.name = name

        // update users set address = jakarta where address = bandung;
        db.collection('users').updateMany(filter, {$set : data})
        .then((resp) => {
            db.collection('users').find(data).toArray()
            .then((resp) => {
                res.json({
                    error : false,
                    message : "update Data Success",
                    data : resp
                })
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })

    })



    // DELETE

    // delete by id

    app.delete('/user/:id', (req,res) => {
        const id = req.params.id
        db.collection('users').deleteOne({_id : mongodb.ObjectId(id)})
        .then((resp) => {
            res.json({
                error : false,
                message : "Delete data success"
            })
        })
        .catch((err) => {
            console.log(err)
        })

    })

    // Delete by prop name

    app.delete('/users' , (req,res) => {
        const address = req.query.address
        const name = req.query.name
        let filter = {}
        if(address) filter.address = address
        if(name) filter.name = name

        db.collection('users').deleteMany(filter , (err,result) => {
            try{
                if(err) throw err
                res.json({
                    error : false,
                    message : 'delete data success'
                })
            }catch(err){
                console.log(err)
            }
        })


    })

    

})




app.listen(PORT , () => console.log('Server Jalan di Port ' + PORT ))