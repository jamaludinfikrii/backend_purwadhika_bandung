const Router = require('express').Router()

Router.get('/')
Router.get('/:id')
Router.post('/:id')
Router.put('/:id')
Router.patch('/:id')
Router.delete('/:id')

module.exports = Router