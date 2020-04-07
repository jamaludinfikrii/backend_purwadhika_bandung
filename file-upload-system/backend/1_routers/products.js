const Router = require('express').Router()
const controllers = require('./../2_controllers/products')

Router.get('/' , controllers.getAllProducts)

module.exports = Router