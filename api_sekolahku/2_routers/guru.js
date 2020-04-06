const Router = require('express').Router()
const Controller = require('./../1_controllers/guru')


Router.get('/getdataguru',Controller.getDataGuru)
Router.get('/getdatagurubyid',Controller.getDataGuruById)
Router.post('/addnewguru' , Controller.addNewGuru)
Router.patch('/editdataguru/:id' , Controller.editDataGuru)
Router.delete('/deletegurubyid/:id' , Controller.deleteGuru)


module.exports = Router

