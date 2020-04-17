const Router = require('express').Router()
const Controller = require('./../controllers/authentication')

Router.get('/', (req,res) => res.send('<h1>Router Auth</h1>'))
Router.patch('/verify/:id', Controller.verify)
Router.post('/register' , Controller.register )
Router.post('/login' , Controller.login )
Router.post('/test-nodemailer' , Controller.testNodemailer )


module.exports =Router



