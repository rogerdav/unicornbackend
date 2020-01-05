'use strict';

const bodyParser = require('body-parser').json();

const Unicorn = require('../model/unicorn');

module.exports = router => {

  router.post('/unicorn/',bodyParser,(req, res) => {
    let tempUnicorn = new Unicorn(req.body);
    return tempUnicorn.save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(() => res.send(400));
  });

  router.get('/unicorn/', bodyParser, (req, res) => {
    Unicorn.find()
      .then(user => {
        res.status(200).json(user);
      })
      .catch(() => res.send(400));
  });

};