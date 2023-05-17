const path = require('path')
const express = require('express')
const app = express()

const morgan = require('morgan')
const exphbs = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'))

// Templete engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')))

//Routes init
route(app)

//Connect to DB
db.connect();

app.listen(process.env.PORT || 3000, function () {
    console.log("Access at http://localhost:%d in %s mode", this.address().port, app.settings.env);
});