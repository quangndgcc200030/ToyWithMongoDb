const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator')
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 255 },
        detail: { type: String, maxLength: 600 },
        price: { type: Number, min: 0 },
        sale: { type: Number, min: 0 },
        stock: { type: Number, min: 0 },
        image: { type: String, maxLength: 255 },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        slug: { type: String, slug: 'name', unique: true }
    },
    {
        timestamps: true,
    }
)

// Add plugins
mongoose.plugin(slug)
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Product', Product);