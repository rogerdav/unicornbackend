// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC19e0a3162b57b4bffad76df52bf125dd';
const authToken = '3b94322f434bef21e1c0a7c41b8d5e02';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is the link for your menu. https://restaurant-menu-roger.s3-us-west-2.amazonaws.com/westy.pdf',
    from: '+12513129415',
    to: '+12063340981',
  })
  .then(message => console.log(message.sid));
