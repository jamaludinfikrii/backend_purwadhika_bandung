const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user : process.env.NODEMAILER_USER,
        pass : process.env.NODEMAILER_PASS
    },
    tls : {
        rejectUnauthorized : false
    }
})


module.exports = transporter