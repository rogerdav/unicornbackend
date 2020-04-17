'use strict';

const bodyParser = require('body-parser').json();
const User = require('../model/user');
const Room = require('../model/room');

module.exports = router => {
  router.put('/joinroom/:roomid?/:userid?', bodyParser, (req, res) => {
    console.log('in join room');
    console.log('params.roomid', req.params.roomid);
    console.log('params.userid', req.params.userid);
    return Room.findById(req.params.roomid)
      .then(room => {
        room.queue.push(req.params.userid);
        return room.save();
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => res.status(400).json(err));
  });
};