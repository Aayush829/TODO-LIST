var mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect("mongodb+srv://pandey:aayu829@cluster0.n0hp2.mongodb.net/todos?retryWrites=true&w=majority")

var db = mongoose.connection

db.on('error', console.error.bind(console, 'mongodb error: '))

db.once('open', () => console.log('mongodb connect'))

module.exports = mongoose
