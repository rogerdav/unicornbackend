'use strict';

const bodyParser = require('body-parser').json();
const Customer = require('./customer-model');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = router => {

  router.post('/customer/',bodyParser,(req, res) => {
    let tempCustomer = new Customer(req.body);
    return tempCustomer.save()
      .then(Customer => {
        console.log('in post customer route', Customer);
        return client.messages
          .create({
            body: 'This is the link for your menu. https://restaurant-menu-roger.s3-us-west-2.amazonaws.com/westy.pdf',
            from: '+12513129415',
            to: `${Customer.tel}`,
          });
      })
      .then(messageId => {
        
        res.status(201).json(messageId);
      })
      .catch(() => res.send(400));
  });

  router.get('/customer/', bodyParser, (req, res) => {
    Customer.find()
      .then(Customers => {
        res.status(200).json(Customers);
      })
      .catch(() => res.send(400));
  });
  
  router.get('/customersbydate/:restuarant/:date', bodyParser, (req, res) => {
    console.log('date', req.params.date);
    let dateToUseStart = `${req.params.date}T00:00:01Z`;
    let dateToUseEnd = `${req.params.date}T23:59:59Z`;
    Customer.find(
      { 
        restuarant: req.params.restuarant, 
        createdAt: { 
          $gte: dateToUseStart,
          $lt: dateToUseEnd,
        }})
      .then(Customers => {
        res.status(200).json(Customers);
      })
      .catch(() => res.send(400));
  });
  
  

  

};