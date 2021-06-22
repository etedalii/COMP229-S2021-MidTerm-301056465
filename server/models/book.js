let mongoose = require('mongoose');

// Create Model Class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    Description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);