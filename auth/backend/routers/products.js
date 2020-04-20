const Router = require('express').Router()
const controller = require('./../controllers/products')

Router.get('/' , controller.getAllProducts)   // bisa diakses semua user yang punya token ( harus login )
Router.get('/:id') //  bisa diakses semua user yang punya token ( harus login )
Router.post('/')  // hanya bisa diakses sama admin
Router.patch('/:id') // hanya bisa diakses sama admin


module.exports = Router