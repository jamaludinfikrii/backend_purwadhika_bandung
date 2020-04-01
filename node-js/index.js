// Built In Module (library)

// URL Module
const url = require('url')
const fs = require('fs')
const chalk = require('chalk')

const link = 'https://nodejs.org/api/os.html'

const link_2 = 'https://localhost:3000/product-detail/4'


const x = url.parse(link)
const y = url.parse(link_2)


console.log(x)
console.log(y.pathname.split('/')[2])



console.log(chalk.blue('hello world'))
console.log(chalk.yellow('hello saya fikri'))



// npm init
// built in module



