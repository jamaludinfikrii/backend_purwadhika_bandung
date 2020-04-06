const Router = require('express').Router()
const contr = require('./../1_controllers/pelajaran')

Router.get('/',contr.getAllData)
Router.get('/:id',contr.getDataById)
Router.post('/',contr.postData)
Router.put('/:id',contr.updateAllColumns)
Router.patch('/:id',contr.updateOneColumn)
Router.delete('/:id',contr.deleteData)

module.exports = Router