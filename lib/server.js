'use strict';

// Application Dependencies
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');


// Application Setup
const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

//Middleware
app.use(cors());
app.use('/api/v1', router);
//TODO:verify that route names are the same and correct paths
require('../routes/unicorn')(router);
require('../routes/userRoute')(router);
require('../routes/roomRoute')(router);
require('../routes/joinRoomRoute')(router);
require('../routes/testevents')(router);
require('../routes/helpRequestRoute')(router);
require('../routes/buildingRouteNZ')(router);
require('../routes/traceNZ')(router);
require('../routes/userRouteNZ')(router);
require('../routes/buildsheetRoute')(router);





//Server Controls
const server = module.exports = {};
server.isOn = false;
server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject(new Error('Server Running. Cannot start server on same port'));
    return server.http = app.listen(PORT, () => {
      console.log((`listening on ${PORT}`));
      server.isOn = true;
      mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      return resolve(server);
    });
  });
};

server.stop = () => {
  
  return new Promise((resolve, reject) => {

    if(!server.isOn) return reject(new Error('Server Error. Cannot stop server that is not running.'));
    return server.http.close(() => {
      console.log('this is inside server stop');
      server.isOn = false;
      mongoose.disconnect();
      return resolve(server);
    });
  });
};
