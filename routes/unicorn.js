'use strict';

const bodyParser = require('body-parser').json();

const Unicorn = require('../model/unicorn');

module.exports = router => {

  

  router.get('/unicorn/', bodyParser, (req, res) => {
    Unicorn.find()
      .then(user => {
        res.status(200).json(user);
      })
      .catch(() => res.send(400));
  });

};