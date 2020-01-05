'use strict';

const mongoose = require('mongoose');

const unicorn = mongoose.Schema ({
  name: {type: String},
  color: { type: String},
  food: { type: String},
  location: { type: String},


});

module.exports = mongoose.model('unicorns', unicorn);