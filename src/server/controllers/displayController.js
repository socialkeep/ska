const db = require('../model/database')
const displayController = {};

displayController.getPending = (req,res,next) => {
  db.query('SELECT * FROM content WHERE status_pending = true')
    .then((data) => {
      if (data.length > 0) {
        res.locals.getPending = data;
        next();
      } else {
        next('Nothing is pending right now.')
      } 
    })
}

displayController.getAccepted = (req,res,next) => {
  db.query('SELECT * FROM content WHERE status_accepted = true')
    .then((data) => {
      if (data.length > 0) {
        res.locals.getAccepted = data;
        next();
      } else {
        next('Nothing is accepted right now.')
      } 
    })
}

displayController.getRejected = (req,res,next) => {
  db.query('SELECT * FROM content WHERE status_rejected = true')
    .then((data) => {
      if (data.length > 0) {
        res.locals.getRejected = data;
        next();
      } else {
        next('Nothing is rejected right now.')
      } 
    })
}

displayController.getPosted = (req,res,next) => {
  db.query('SELECT * FROM content WHERE status_posted = true')
    .then((data) => {
      if (data.length > 0) {
        res.locals.getPosted = data;
        next();
      } else {
        next('Nothing is posted right now.')
      } 
    })
}


module.exports = displayController;