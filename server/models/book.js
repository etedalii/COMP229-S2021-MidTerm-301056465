/**
 * book.js
 * Editor's name: Mohammad Etedali 301056465
 * Date edit: 06/22/2021
 * This file, create the book entity 
 */

let mongoose = require('mongoose');

// Create Model Class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);