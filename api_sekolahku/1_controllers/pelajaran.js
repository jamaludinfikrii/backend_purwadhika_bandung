const db = require('./../3_databases/mysql')

const getAllData = (req,res) => {
    let sql = 'select * from pelajaran;'
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

const getDataById = (req,res) => {
    const id = req.params.id
    const sql = 'select * from pelajaran where id = ?;'
    db.query(sql,id,(err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result[0]
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })

}

const postData = (req,res) => {
    const data = req.body
    const sql = 'insert into pelajaran set ?'
    db.query(sql,data,(err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                message : 'Insert Data Success'
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })


}

// REQ.PARAMS /id
// REQ.QUERY ?nama='fikri'
// REQ.BODY parameter kedua kirim object

const updateAllColumns = (req,res) => {
    const sql = 'update pelajaran set nama=?, gender = ?, age = ? where id = ?'
    db.query(sql,[req.body.nama,req.body.gende])

    /**
     * UPDATE table_name
SET column1=value, column2=value2,...
WHERE some_column=some_value 
     */

}

const updateOneColumn = (req,res) => {
    const sql = 'update pelajaran set ?'
    db.query(sql,req.body)
}

const deleteData = (req,res) => {
    const sql = 'delete from pelajaran where id = ?'
}


const allFunctions = {
    getAllData,
    getDataById,
    postData,
    updateAllColumns,
    updateOneColumn,
    deleteData
}


module.exports = allFunctions