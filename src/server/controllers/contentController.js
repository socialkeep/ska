const db = require('../model/database')
const contentController = {};

contentController.add = (req, res, next) => {
  let photo_url = res.locals.photo;
  let text_content = req.body.socialMediaPostText;
  let name = req.body.firstName;
  let email = req.body.email;
  let instagram = req.body.instagram;
  let facebook = req.body.facebook;
  let twitter =  req.body.twitter;
  let status_pending = true;
  let status_accepted = false;
  let status_rejected = false;
  let status_posted = false;

  let queryString = `INSERT INTO content(photo_url, text_content, name, email, instagram, facebook, twitter, status_pending, status_accepted, status_rejected, status_posted) VALUES('${photo_url}', '${text_content}', '${name}', '${email}', '${instagram}', '${facebook}', '${twitter}', ${status_pending}, ${status_accepted}, ${status_rejected}, ${status_posted})`;
  db.query(queryString)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one post submission.'
        });
    })
    .catch(function (err) {
      return next(`There's been an error: ${err}`);
    });
}


contentController.update = (req, res, next) => {
  let id = id;
  let status_pending = req.body.status_pending;
  let status_accepted = req.body.status_accepted;
  let status_rejected = req.body.status_rejected;
  let status_posted = req.body.status_posted;
  
  let queryString = `UPDATE content SET "status_pending" = ${status_pending}, "status_accepted" = ${status_accepted}, "status_rejected" = ${status_rejected}, "status_posted" = ${status_posted} WHERE id = ${id}`;

  db.query(queryString)
  .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated content status.'
        })
    })
    .catch((err) => {
      return next(`There's been an error: ${err}`);
    })
}


module.exports = contentController;