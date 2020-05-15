'use strict';

const bodyParser = require('body-parser').json();

const Restuarant = require('./restuarant-model');

module.exports = router => {

  router.post('/restuarant/',bodyParser,(req, res) => {
    let tempRestuarant = new Restuarant(req.body);
    return tempRestuarant.save()
      .then(Restuarant => {
        res.status(201).json(Restuarant);
      })
      .catch(() => res.send(400));
  });

  router.get('/restuarant/', bodyParser, (req, res) => {
    Restuarant.find()
      .then(Restuarants => {
        res.status(200).json(Restuarants);
      })
      .catch(() => res.send(400));
  });

  

};