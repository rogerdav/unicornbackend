'use strict';

const mongoose = require('mongoose');

const room = mongoose.Schema ({
  name: {type: String},
  owner: [{type: mongoose.Schema.Types.ObjectId,  ref: 'userModel'}],
  queue: [{type: mongoose.Schema.Types.ObjectId,  ref: 'userModel'}],


});

module.exports = mongoose.model('rooms', room);