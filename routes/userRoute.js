'use strict';

const bodyParser = require('body-parser').json();
const User = require('../model/user');


module.exports = router => {

  router.post('/newuser/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempUser = new User(req.body);
    return tempUser.save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => res.status(400).json(err));

  });

};