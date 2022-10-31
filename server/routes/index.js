/*COMP 229-Favourite Books List - Student name: Arpan Gohel - StudentID:300565463 - Oct30,2022*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let Book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
   });
});


module.exports = router;
