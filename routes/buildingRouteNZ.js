'use strict';

const bodyParser = require('body-parser').json();
const Building = require('../model/buildingnz');


module.exports = router => {

  router.post('/newbuildingnz/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempBuilding = new Building(req.body);
    return tempBuilding.save()
      .then(building => {
        res.status(201).json(building);
      })
      .catch(err => res.status(400).json(err));

  });
  router.get('/buildingnz/', bodyParser, (req, res) => {
    
    return Building.find()
      .then(building => {
        res.status(201).json(building);
      })
      .catch(err => res.status(400).json(err));

  });

};