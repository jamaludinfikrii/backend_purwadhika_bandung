// mysql
// express
// express + mysqljs
// rest api
// multer
// authentication flow
// nodemailer
// jwt token
// deploy with heroku
// eer diagram
// mongodb
// rest api mongodb



// manage category pages
    // get category with parent category
    // get all categories
    // delete category by id
    // edit category name and parent with id
    // add category

// manage products pages
    // get all products
    // add product
    // edit by id
    // delete by id

// manage product category
    // get data product join with category
    // get all products
    // get all categories
    // delete by id
    // add product category



const express = require('express')
const mysql = require('mysql')
const app = express()
const PORT = 5000


const db = mysql.createConnection({
    user : "root",
    password : '111111111',
    database : "tokokasih",
    host : "localhost",
    port : 3306
})

app.use(express.json())

app.get('/' , (req,res) => {
    res.send('<h1>Hello world</h1>')
})


// Manage Category Page

// get all categories
app.get('/categories' , (req,res) => {
    let sql = 'select * from categories;'
    db.query(sql, (err,result) => {
        if(err) throw err
        res.json(result)
    })
})

// get all categories with parent category
app.get('/categories-parent',(req,res) => {
    let sql = `select c.id as id, c.category as category, c2.category as parent from categories c 
    left join categories c2 on c.parentId = c2.id;`
    db.query(sql, (err,result) => {
        if(err) throw err
        res.json(result)
    })
})


app.delete('/category/:id', (req,res) => {
    const id = req.params.id

    // check ada child atau enggak
    let sql = 'select * from categories where parentId = ?'
    db.query(sql,id,(err,child) => {
        if(err) throw err
        // if ada child
        if(child.length > 0){
            console.log(child) // [ {id, category, parentId} ]
            // set jadi null parent ID child nya
            child.forEach((val) => {
                db.query('update categories set parentId = null where id = ' + val.id, (err,result) => {
                    if(err) throw err
                })
            })
            // delete parent
            db.query('delete from categories where id = ?' , id, (err,result) => {
                if(err) throw err
                res.json({message : "success"})
            })
        }else{
            // if there is no child, langsung delete
            db.query('delete from categories where id = ?' , id, (err,result) => {
                if(err) throw err
                res.json({message : "success"})
            })
        }
    })
    // delete category
})


app.patch('/category/:id' , (req,res) => {
    let sql = 'update categories set ? where id = ? ;'
    const data = req.body // {"colomn_name" : "new_value"}  {"parentId" : 2} {'category' : "laptop"} {parentId : 2, category : "pc"}
    const id = req.params.id
    db.query(sql,[data,id],(err,result)=> {
        if(err) throw err
        res.json({message:'Edit data Success'})
    }) 

})

app.post('/category' , (req,res) => {
    let sql = 'insert into categories set ?'
    const data = req.body // {category : "xiaomi", parentId : null}
    if(data.category){
        db.query(sql,data,(err,result) => {
            if(err) throw err
            res.send('success')
        })
    }else{
        res.send('data format invalid')
    }
})


// delete parent, set child = null, 
// apa yang terjadi dengan grand child??

// hp > xiaomi
// 4, null  >  7 , 4




// manage product category pages 

// get data product join with category

app.get('/prodcat' , (req,res) => {
    db.query(
        `select pc.id as id, p.nama as nama, category from productcat pc
        join products p on pc.productId = p.id
        join categories c on pc.cateogoryId = c.id;`
        ,(err,result) => {
            if(err) throw err
            res.json(result)
        }
    )
})


// add product category

app.post('/prodcat' , (req,res) => {
    const data = req.body // {productId , categoryId}
    console.log(data)
    let sqlInsert = 'insert into productcat set ?;'
    function getDataParent (id) {
        db.query('select * from categories where id = ' + id,(err,result) => {
            if(err) throw err
            console.log(result)
            db.query(sqlInsert , {productId : data.productId, cateogoryId : result[0].id},(err,result) => {
                if(err) throw err
            })
            if(result[0].parentId !== null){
                getDataParent(result[0].parentId)
            }else{
                res.json('success added')
            }
        })
    }

    getDataParent(data.cateogoryId)
    
    
    


})




app.listen(PORT , () => console.log('Server Run on port ' + PORT))






