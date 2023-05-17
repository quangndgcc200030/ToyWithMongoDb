const Category = require('../models/Category')

class CategoryController {
    // [GET] /category
    index(req, res) {
        Promise.all([Category.find({}), Category.countDocumentsDeleted()])
            .then(([categories, deletedCount]) => {
                res.status(200).json({
                    success: true,
                    deletedCount: deletedCount,
                    categories: categories
                })
            })
    }

    // [GET] /category/:slug
    show(req, res) {
        Category.findOne({ slug: req.params.slug })
            .then(category => res.status(200).json({
                success: true,
                category: category
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [POST] /category
    create(req, res, next) {
        const category = new Category(req.body)
        category.save()
            .then(() => res.status(200).json({
                success: true,
                message: "New category was added!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [PUT] /category/:id
    update(req, res) {
        const categoryId = req.params.id
        Category.updateOne({ _id: categoryId }, req.body)
            .then(() => res.status(200).json({
                success: true,
                message: "Category ID " + categoryId + " was updated!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [DELETE] /category/:id
    delete(req, res) {
        const categoryId = req.params.id
        Category.delete({ _id: categoryId })
            .then(() => res.status(200).json({
                success: true,
                message: "Category ID " + categoryId + " was deleted!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [GET] /category/trash
    trashCategory(req, res) {
        Category.findDeleted({})
            .then(categories => res.status(200).json({
                success: true,
                categories: categories
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [PATCH] /category/:id/restore
    restore(req, res) {
        const categoryId = req.params.id
        Category.restore({ _id: categoryId })
            .then(() => res.status(200).json({
                success: true,
                message: "Category ID " + categoryId + " was restored!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }

    // [DELETE] /category/:id/force
    forceDelete(req, res) {
        const categoryId = req.params.id
        Category.deleteOne({ _id: categoryId })
            .then(() => res.status(200).json({
                success: true,
                message: "Category ID " + categoryId + " was permanently deleted!"
            }))
            .catch(err => res.status(400).json({
                success: false,
                error: err
            }))
    }
}

module.exports = new CategoryController