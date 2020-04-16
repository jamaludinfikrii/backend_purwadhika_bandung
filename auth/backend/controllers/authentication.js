const db = require('./../database/mysql')
const passwordHasher = require('./../helpers/hashing')
const transporter = require('./../helpers/nodemailerTransporter')


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

                        // send email verification to user
                        transporter.sendMail({
                            from : "Toko Berkah",
                            to : data.email,
                            subject : "VERIFY YOUR EMAIL NOW !!!",
                            html : `
                                <h1> Click Link <a href='http://localhost:3000/verification-success/${result.insertId}'> Here </a> to verify your email
                            `
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
    
   
    
    // respon register success
}




function testNodemailer (req,res){
    console.log('masuk')

    const mailOptions = {
        from : "Jamaludin Fikri",
        to : "jamaludinfikrii@gmail.com , ganafgan@gmail.com, me@fikri.tech",
        subject : "Verify your email now !!!!",
        html : "<h1>Hello, Please Verify your email <a href='google.com'>here</a>"
    }

    transporter.sendMail(mailOptions)
    .then((val) => {
        console.log(val)
        res.json({
            error : false,
            message : "Email successfully sent"
        })
    })
    .catch((err) => {
        console.log(err)
    })
    

}


function verify (req,res) {
    const id = req.params.id
    let sqlUpdate = 'update users set verified = 1 where id = ?'
    db.query(sqlUpdate, id, (err,result) => {
        if(err) throw err
        res.json({
            error : false,
            message : "verify success"
        })
    })
}


module.exports ={
    register : Register,
    testNodemailer,
    verify
}