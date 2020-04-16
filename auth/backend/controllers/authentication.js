const db = require('./../database/mysql')
const passwordHasher = require('./../helpers/hashing')


function Register(req,res){
    const data = req.body // {email : fikri@fikril.com , password : 123123}
    
    // check email availability
    const sqlEmailCheck = 'select * from users where email = ?;'; 
    db.query(sqlEmailCheck , data.email , (err,result) => {
        try{
            if(err) throw err
            if(result.length > 0){

                // email has ben taken
                res.json({
                    error : true,
                    message : "email not available"
                })
                
            }else{
                // available

                // hashing password
                const afterHashing = passwordHasher(data.password)
                data.password = afterHashing

                // post data to sql with status unverified email
                const sqlInsert = 'insert into users set ?;'
                db.query(sqlInsert, data, (err,result) => {
                    try{
                        if(err) throw err
                        res.json({
                            error : false,
                            message : "insert user success"
                        })
                    }catch(err){
                        res.json({
                            error : true,
                            message : err.message
                        })
                    }
                })
                
            }

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
    
   
    // send email verification to user
    // respon register success
}


module.exports ={
    register : Register
}