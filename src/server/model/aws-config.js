const S3 = require('aws-sdk/clients/s3');
require('dotenv').config();

const s3 = new S3({
  apiVersion: '2006-03-01',
    region: 'us-west-1', 
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY
    }
});

module.exports = s3;