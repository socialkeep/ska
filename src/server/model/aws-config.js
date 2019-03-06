const AWS = require('aws-sdk');
require('dotenv').config();

// Configure the AWS environment -> supply our credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-west-1',
});

const s3 = new AWS.S3();

module.exports = s3;