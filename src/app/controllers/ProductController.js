const Product = require('../models/Product')

class ProductController {
    // [GET] /product
    index(req, res) {
        Promise.all([Product.find({}), Product.countDocumentsDeleted()])
            .then(([products, deletedCount]) => {
                res.status(200).json({
                    success: true,
                    deletedCount: deletedCount,
                    products: products
                })
            })
    }

    // [GET] /product/:slug
    show(req, res) {
        Product.findOne({ slug: req.params.slug })
            .then(product => res.status(200).json({
                success: true,
                product: product
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [POST] /product
    create(req, res, next) {
        const product = new Product(req.body)
        product.save()
            .then(() => res.status(200).json({
                success: true,
                message: "New product was added!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [PUT] /product/:id
    update(req, res) {
        const productId = req.params.id
        Product.updateOne({ _id: productId }, req.body)
            .then(() => res.status(200).json({
                success: true,
                message: "Product ID " + productId + " was updated!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [DELETE] /product/:id
    delete(req, res) {
        const productId = req.params.id
        Product.delete({ _id: productId })
            .then(() => res.status(200).json({
                success: true,
                message: "Category ID " + productId + " was deleted!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [GET] /product/trash
    trash(req, res) {
        Product.findDeleted({})
            .then(products => res.status(200).json({
                success: true,
                products: products
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [PATCH] /product/:id/restore
    restore(req, res) {
        const productId = req.params.id
        Product.restore({ _id: productId })
            .then(() => res.status(200).json({
                success: true,
                message: "Product ID " + productId + " was restored!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [DELETE] /product/:id/force
    forceDelete(req, res) {
        const productId = req.params.id
        Product.deleteOne({ _id: productId })
            .then(() => res.status(200).json({
                success: true,
                message: "Category ID " + productId + " was permanently deleted!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }
}

module.exports = new ProductController