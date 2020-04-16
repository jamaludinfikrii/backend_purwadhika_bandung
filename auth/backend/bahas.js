const crypto = require('crypto') // built in package / library

require('dotenv').config()
const hmac = crypto.createHmac('sha256',process.env.HASH_SECRET)
const pass = 'abc123'

const afterHash = hmac.update(pass).digest('hex')

console.log(afterHash)