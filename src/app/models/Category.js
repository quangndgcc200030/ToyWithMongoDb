const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator')
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }
    },
    {
        timestamps: true,
    }
)

// Add plugins
mongoose.plugin(slug)
Category.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Category', Category);