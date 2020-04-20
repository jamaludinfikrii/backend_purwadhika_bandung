const db = require('./../database/mysql')
const jwt = require('jsonwebtoken')
require('dotenv').config()


function getAllProducts (req,res) {
    const token = req.token
    try{
        let decoded = jwt.verify(token,process.env.JWT_SECRET)
        let sql = 'select * from products'
        db.query(sql,(err,result) => {
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
    }catch(err){
        // console.log(err)
        res.json({
            error : true,
            message : "User not authorized"
        })
    }

    
    
    
}


module.exports ={
    getAllProducts
}