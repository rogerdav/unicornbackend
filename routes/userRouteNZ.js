'use strict';

const bodyParser = require('body-parser').json();
const UserNZ = require('../model/usernz');


module.exports = router => {

  router.post('/newuserNZ/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempUser = new UserNZ(req.body);
    return tempUser.save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => res.status(400).json(err));

  });
  router.get('/getnzuser/:username', bodyParser, (req, res) => {
    console.log('in new user', req.params.username);
    
    return UserNZ.find({username: req.params.username})
      .then(user => {
        res.status(201).json(user[0]);
      })
      .catch(err => res.status(400).json(err));

  });

};