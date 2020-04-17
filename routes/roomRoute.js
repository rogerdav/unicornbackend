'use strict';

const bodyParser = require('body-parser').json();
const Room = require('../model/room');


module.exports = router => {

  router.post('/newroom/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempRoom = new Room(req.body);
    return tempRoom.save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => res.status(400).json(err));

  });
  router.get('/room/:roomid?', bodyParser, (req, res) => {
    Room.findById(req.params.roomid).populate('queue')
      .then(room => {
        res.status(200).json(room);
      })
      .catch(err => res.status(400).json(err));
  });

};