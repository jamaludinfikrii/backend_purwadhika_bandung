const Router = require('express').Router()
const Controller = require('./../controllers/authentication')

Router.get('/', (req,res) => res.send('<h1>Router Auth</h1>'))
Router.post('/register' , Controller.register )


module.exports =Router



