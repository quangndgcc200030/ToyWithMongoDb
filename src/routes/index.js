const homeRouter = require('./home')
const categoryRouter = require('./category')
const productRouter = require('./product')
const siteRouter = require('./site')

function route(app) {
    app.use('/api/site', siteRouter)
    app.use('/api/product', productRouter)
    app.use('/api/category', categoryRouter)
    app.use('/', homeRouter)
}

module.exports = route;