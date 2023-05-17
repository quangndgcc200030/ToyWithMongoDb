const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect database successfully!')
    } catch (error) {
        console.log('Connect database fail!')
    }
}

module.exports = { connect };