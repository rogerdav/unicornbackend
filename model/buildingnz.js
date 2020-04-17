'use strict';

const mongoose = require('mongoose');

const buildingNZ = mongoose.Schema({
  name : { type: String, required: true, unique: true},
  address : { type: String, required: false},

}, {timestamps: true});

module.exports = mongoose.model('buildingNZ', buildingNZ);