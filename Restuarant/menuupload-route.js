'use strict';

const bodyParser = require('body-parser').json({limit: '50mb'});
const Restuarant = require('./restuarant-model');
const fileupload = require('./file-upload');



module.exports = router => {

  router.post('/menuupload/',bodyParser,(req, res) => {
    console.log(req.body.restuarant);
    return fileupload(req.body.pdfFile, req.body.restuarant)
      .then(result => {
        console.log('in post customer route', result.data.Location);
        res.status(201).json(result.data.Location);
        // return result.data.location;
      })
      .catch(err => {
        console.log(err);
        res.status(400);
      });
  });

  
  
  
  
  

  

};