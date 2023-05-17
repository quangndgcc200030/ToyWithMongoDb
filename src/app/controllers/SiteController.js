const Product = require('../models/Product')
const Category = require('../models/Category')

class SiteController {
    shop(req, res) {
        Product.find({})
            .populate('category', 'name')
            .select("name price sale image")
            .then((products) => {
                res.status(200).json({
                    success: true,
                    products: products
                })
            })
    }

    productsByCategory(req, res) {
        Category.findOne({ slug: req.params.slug }).select('_id')
            .then(category => {
                Product.find({ category: category._id })
                    .populate('category', 'name')
                    .select("name price sale image")
                    .then(products => {
                        res.status(200).json({
                            success: true,
                            products: products
                        })
                    })
                    .catch(err => res.status(400).json({
                        success: false,
                        error: err
                    }))
            })
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }
}

module.exports = new SiteController