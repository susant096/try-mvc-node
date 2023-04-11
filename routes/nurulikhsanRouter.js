const express = require('express')
const router = express.Router()
const nurulikhsanController = require('../controller/nurulikhsanController')

router.get('/', nurulikhsanController.index)
router.get('/article', nurulikhsanController.article)
router.post('/article', nurulikhsanController.addArticle)
router.get('/edit/:id', nurulikhsanController.edit)
router.put('/update/:id', nurulikhsanController.update)

module.exports = router