const jwt = require('jsonwebtoken')
require('dotenv').config()

// const data = {
//     email : "jamaludinfikrii@gmail.com",
//     id : '7'
// }

// const token = jwt.sign(data,'123rahasia')


// const decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbWFsdWRpbmZpa3JpaUBnbWFpbC5jb20iLCJpZCI6OSwiaWF0IjoxNTg3MDk1MjQ4fQ.622WFR_nE48I3q62GBKCjfNv6PsdzovB48poqs6-c6M', '123rahasia')

// console.log(token)
// console.log(decoded)


function createJwt (payload) {
    const token = jwt.sign(payload , process.env.JWT_SECRET )
    return token
}

function decodeToken (token) {
    const data = jwt.verify(token , process.env.JWT_SECRET)
    return data
}


module.exports = {
    createJwt,
    decodeToken
}