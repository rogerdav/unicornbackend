'use strict';

const mongoose = require('mongoose');

const RestCust = mongoose.Schema ({
  name: {type: String},
  email: {type: String},
  tel: {type: String},
  table: {type: String},
  
  restuarant: {type: mongoose.Schema.Types.ObjectId,  ref: 'restuarant'},

}, {timestamps: true});

module.exports = mongoose.model('restcustomer', RestCust);