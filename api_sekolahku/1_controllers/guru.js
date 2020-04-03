const db = require('./../3_databases/mysql')

const getDataGuru = (req,res) => {
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
}

const getDataGuruById = (req,res) => {
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

}

const addNewGuru = (req,res) => {
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
}

const editDataGuru = (req,res) => {
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
}


const deleteGuru = (req,res) => {
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
}

module.exports = {
    getDataGuru : getDataGuru,
    getDataGuruById : getDataGuruById,
    addNewGuru : addNewGuru,
    editDataGuru,
    deleteGuru
}