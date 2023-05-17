const express = require("express")
const router = express.Router()
const productController = require('../app/controllers/productController')

router.delete('/:id/force', productController.forceDelete)
router.patch('/:id/restore', productController.restore)
router.get('/trash', productController.trash)
router.delete('/:id', productController.delete)
router.put('/:id', productController.update)
router.post('/', productController.create)
router.get('/:slug', productController.show)
router.get('/', productController.index)

module.exports = router