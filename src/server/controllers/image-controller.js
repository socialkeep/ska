const S3 = require('../model/aws-config');
const fs = require('fs');
const imageController = {}

imageController.addPhoto = (req,res,next) => {
  console.log("file??", req.file);
  if (req.file === null) return next();


  const tempFilePath = req.file.path;

  const params = {
    // which bucket in S3 to store file in
    Bucket: process.env.AWS_S3_Bucket,
    // the image data
    Body: fs.createReadStream(tempFilePath),
    // figure out type vs disposition -> type is stored format?
    ContentType: 'image/jpeg',
    // the new key for the image -> helps generate unique URL
    Key: `images/${Date.now()}_${req.file.filename}`,
    ContentDispositon: 'inline; filename=filename.png',
    // access control -> everyone can read
    ACL: 'public-read',
  };

  S3.upload(params)
    .promise()
    .then((data) => {
      // store returned URL on res.locals
      console.log(`uploaded photo, got back data: ${data.Location}`);
      res.locals.photo = data.Location;
    
    })
    .then(() => {
      console.log('removing file');
      fs.unlinkSync(tempFilePath, () => {
        console.log('removed file');
      });
    })
    .then(() => {
      console.log('moving on');
      next();
    })
    .catch((err) => {
      console.log(`WHOOPS! ${err}`);
      next();
    });
}


module.exports = imageController;