const db = require('../model/database')
const adminController = {};


adminController.verify = (req, res, next) => {
  db.query(`SELECT * FROM admin WHERE email = '${req.params.email}' AND password = '${req.params.password}'`)
    .then((data) => {
      next();
    })
    .catch((err) => {
      next(`Access denied. ${err}`);
    })
}


module.exports = adminController;