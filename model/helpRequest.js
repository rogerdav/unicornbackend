'use strict';

const mongoose = require('mongoose');

const helpRequest = mongoose.Schema ({
  
  owner: {type: mongoose.Schema.Types.ObjectId,  ref: 'userModel'},
  room: {type: mongoose.Schema.Types.ObjectId,  ref: 'userModel'},
  busy: {type: Boolean, default: false},
  complete: {type: Boolean, default: false},

}, {timestamps: true});

module.exports = mongoose.model('helpRequests', helpRequest);