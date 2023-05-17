const express = require("express")
const router = express.Router()
const categoryController = require('../app/controllers/CategoryController')

router.delete('/:id/force', categoryController.forceDelete)
router.patch('/:id/restore', categoryController.restore)
router.get('/trash', categoryController.trashCategory)
router.delete('/:id', categoryController.delete)
router.put('/:id', categoryController.update)
router.post('/', categoryController.create)
router.get('/:slug', categoryController.show)
router.get('/', categoryController.index)

module.exports = router