'use strict';

const mongoose = require('mongoose');

const entryNZ = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId,  ref: 'userNZModel'},
  building: {type: mongoose.Schema.Types.ObjectId,  ref: 'buildingNZ'},
  in: {type: Boolean},
  out: {type: Boolean},
  personvisiting: {type: String},
  floor: {type: String},
  parking: {type: Boolean},
  vrn: {type: String},
  found: {type: Boolean},

}, {timestamps: true});

module.exports = mongoose.model('entryNZ', entryNZ);