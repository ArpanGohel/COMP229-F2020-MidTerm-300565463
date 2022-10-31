/*COMP 229-Favourite Books List - Student name: Arpan Gohel - StudentID:300565463 - Oct30,2022*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: String,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
