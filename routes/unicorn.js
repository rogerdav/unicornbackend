'use strict';

const bodyParser = require('body-parser').json();

const Unicorn = require('../model/unicorn');

module.exports = router => {

  router.post('/unicorn/',bodyParser,(req, res) => {
    let tempUnicorn = new Unicorn(req.body);
    return tempUnicorn.save()
      .then(unicorn => {
        res.status(201).json(unicorn);
      })
      .catch(() => res.send(400));
  });

  router.get('/unicorn/', bodyParser, (req, res) => {
    Unicorn.find()
      .then(unicorns => {
        res.status(200).json(unicorns);
      })
      .catch(() => res.send(400));
  });

  router.put('/unicorn/', bodyParser, (req, res) => {
    Unicorn.updateOne({ name: `${req.body.name}`}, {location: `${req.body.location}`})
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => res.send(400));
  });

};