const express = require("express")
const router = express.Router()
const homeController = require('../app/controllers/HomeController')

router.get('/contact', homeController.contact)
router.get('/about', homeController.about)
router.get('/shop', homeController.shop)
router.get('/', homeController.index)

module.exports = router