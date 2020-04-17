'use strict';

const bodyParser = require('body-parser').json();
const Room = require('../model/room');
const HelpRequest = require('../model/helpRequest');
const eventHistory = [];

module.exports = router => {

  router.get('/events/', bodyParser, (req, res) => {
    
    res.writeHead(200, {
      Connection: 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    
    // checkConnectionToRestore(req, res, eventHistory);
    
    setTimeout(() => findUpdates(res), 30000);
   
    
    // sendEvents(res, eventHistory);

  });
  

};








function findUpdates(response) {
  let d = new Date(Date.now());
  d.setMinutes(d.getMinutes()-5);
  return HelpRequest.find({'updatedAt': {$gte: d}})
    .then(results => {
      console.log('results from 5 minutes', results);
      if(results.length > 0 ) {
        results.map(ele => {
          const StestString = JSON.stringify(ele);
          const eventString =
          `event: flightStateUpdate:${ele.room}\ndata: ${StestString} \n\n`;
          response.write(eventString);
      
        });
      }
    })
    .catch(err => console.log('errr', err));
}



// function sendEvents(response, eventHistory) {
//   setTimeout(() => {
//     if (!response.finished) {
//       const eventString =
//         'id: 1\nevent: flightStateUpdate\ndata: {"flight": "I768", "state": "landing"}\n\n';
//       response.write(eventString);
//       eventHistory.push(eventString);
//     }
//   }, 3000);

  

// // function checkConnectionToRestore(request, response, eventHistory) {
// //   if (request.headers['last-event-id']) {
// //     const eventId = parseInt(request.headers['last-event-id']);

// //     const eventsToReSend = eventHistory.filter(e => e.id > eventId);

// //     eventsToReSend.forEach(e => {
// //       if (!response.finished) {
// //         response.write(e);
// //       }
// //     });
// //   }
// }