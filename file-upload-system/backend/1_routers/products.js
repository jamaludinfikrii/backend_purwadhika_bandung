const Router = require('express').Router()
const controllers = require('./../2_controllers/products')

Router.get('/' , controllers.getAllProducts) 
Router.get('/:id',controllers.getProductById)
Router.post('/',controllers.postNewProduct)


module.exports = Router