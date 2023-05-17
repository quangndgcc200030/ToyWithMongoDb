const express = require("express")
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

router.get('/shop/:slug', siteController.productsByCategory)
router.get('/shop', siteController.shop)

module.exports = router