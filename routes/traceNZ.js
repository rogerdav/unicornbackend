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
  router.put('/checkin/:traceid', bodyParser, (req, res) => {
    
    
    return Trace.findById(req.params.traceid)
      .then(trace => {
        trace.in = true;
        return trace.save();
      })
      .then(trace => {
        res.status(200).json(trace);
      })
      .catch(err => res.status(400).json(err));

  });
  router.put('/checkout/:traceid', bodyParser, (req, res) => {
    return Trace.findById(req.params.traceid)
      .then(trace => {
        trace.out = true;
        return trace.save();
      })
      .then(trace => {
        res.status(200).json(trace);
      })
      .catch(err => res.status(400).json(err));
  });
  
  router.get('/stillin/', bodyParser, (req, res) => {
    return Trace.find({in: true, out: false, found: false}).populate('user')
      
      .then(trace => {
        res.status(200).json(trace);
      })
      .catch(err => res.status(400).json(err));
  });
  
  router.get('/tracenzall/', bodyParser, (req, res) => {
    return Trace.find()
      .then(trace => {
        res.status(200).json(trace);
      })
      .catch(err => res.status(400).json(err));
  });
  
  router.put('/found/:id', bodyParser, (req, res) => {
    return Trace.findById(req.params.id)
      .then(trace => {
        trace.found = true;
        return trace.save();
        
      })
      .then(trace => {
        res.status(200).json(trace);
      })
      .catch(err => res.status(400).json(err));
  });
  

};