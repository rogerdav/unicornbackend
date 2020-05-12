'use strict';

const bodyParser = require('body-parser').json();
const BuildSheet = require('../model/buildsheetModel');


module.exports = router => {

  router.post('/newbuildsheet/', bodyParser, (req, res) => {
    console.log('in new user', req.body);
    let tempBuildSheet = new BuildSheet(req.body);
    return tempBuildSheet.save()
      .then(buildsheet => {
        res.status(201).json(buildsheet);
      })
      .catch(err => res.status(400).json(err));

  });
  router.get('/buildsheets/', bodyParser, (req, res) => {
    
    return BuildSheet.find()
      .then(sheets => {
        res.status(201).json(sheets);
      })
      .catch(err => res.status(400).json(err));

  });

};