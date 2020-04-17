'use strict';

const bodyParser = require('body-parser').json();
const Trace = require('../model/entrynz');


module.exports = router => {

  router.post('/newtracenz/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempTrace = new Trace(req.body);
    return tempTrace.save()
      .then(trace => {
        res.status(201).json(trace);
      })
      .catch(err => res.status(400).json(err));

  });
  router.get('/checkin/:traceid', bodyParser, (req, res) => {
    
    
    return Trace.findById(req.params.traceid)
      .then(trace => {
        res.status(201).json(trace);
      })
      .catch(err => res.status(400).json(err));

  });

};