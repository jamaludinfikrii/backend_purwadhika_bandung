const db = require('./../3_databases/mysql')

const getAllProducts = (req,res) => {
    const sql = 'select * from products;'

    db.query(sql, (err,result) => {
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


module.exports = {
    getAllProducts
}