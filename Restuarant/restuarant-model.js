'use strict';

const mongoose = require('mongoose');

const Restuarant = mongoose.Schema ({
  name: {type: String},
  email: {type: String},
  tel: {type: String},
  address: {type: String},
  menu: {type: String},

}, {timestamps: true});

module.exports = mongoose.model('restuarant', Restuarant);