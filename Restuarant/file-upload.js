const AWS = require('aws-sdk');

module.exports = (pdf, id) => {
  
  let buf = new Buffer(pdf.replace(/^data:application\/pdf;base64,/, ''),'base64');
  let fileSize = buf.toString().length;
  const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  const params = {
    ACL: 'public-read',
    Bucket: 'restaurant-menu-roger', // pass your bucket name
    Key: `${id}.pdf`, // file will be saved as the file name will be the restuarant.pdf
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'application/pdf',
    CacheControl: 'no-cache',
  };

  return new Promise ((resolve, reject) => {
    s3.upload(params, (err, data) => err ? reject(err) : resolve({data, fileSize}));
  });
  

};

