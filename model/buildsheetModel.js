'use strict';

const mongoose = require('mongoose');

const buildSheet = mongoose.Schema({
  title : { type: String, required: true, unique: true},
  description : { type: String, required: false},
  displayImage: [],
  picture: [],
  steps: [{ type: String, required: false}],
  stepsES:[{ type: String, required: false}],

}, {timestamps: true});

module.exports = mongoose.model('buildsheets', buildSheet);