'use strict';

const bodyParser = require('body-parser').json();
const HelpRequest = require('../model/helpRequest');


module.exports = router => {

  router.post('/newhelprequest/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempRoom = new HelpRequest(req.body);
    return tempRoom.save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => res.status(400).json(err));

  });
  router.get('/helprequest/:roomid?', bodyParser, (req, res) => {
    HelpRequest.find({'room': req.params.roomid}).populate('owner')
      .then(helprequests => {
        res.status(200).json(helprequests);
      })
      .catch(err => res.status(400).json(err));
  });
  router.put('/helprequest/:requestid?', bodyParser, (req, res) => {
    HelpRequest.findOneAndUpdate({'_id': req.params.requestid}, 
      {'complete': req.body.complete})
      .then(helprequests => {
        res.status(200).json(helprequests);
      })
      .catch(err => res.status(400).json(err));
  });

};