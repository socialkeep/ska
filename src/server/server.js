const path = require('path');
const express = require('express');
const http = require ('http');
const cors = require('cors');
const adminController = require('./controllers/adminController')
const contentController = require('./controllers/contentController')
const displayController = require('./controllers/displayController')
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const imageController = require('./controllers/imageController');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../build')));

app.post('/api/addPhoto', upload.single('file'), imageController.addPhoto, (req,res) => {
  res.status(200).json({result: "LOGGED IN"});
});

// when 'submit' is clicked on post submission form, sends you to thank you page
app.post('/createpost', upload.single('file'), imageController.addPhoto, contentController.add, (req, res) => {
  console.log("blah pls")
  res.send('Thank you for submitting a post!');
});

// takes you from admin login to admin content view (pending tab default)
app.get('/login', adminController.verify, displayController.getPending, (req, res) => {
  res.send(res.locals.getPending);
});

// updates content from pending to approved or rejected, also can update from approved to posted
app.post('/updatecontent', contentController.update, (req, res) => {
  res.send('OK updated');
})

// gets all pending posts for admin view (pending tab)
app.get('/pending', displayController.getPending, (req, res) => {
  res.send(res.locals.getPending);
})

// MELODY DO WE STILL NEED THIS??
app.get('/pending', (req,res) =>{
  res.status(200).json({done:true});
});

// gets all accepted posts for admin view (accepted tab)
app.get('/accepted', displayController.getAccepted, (req, res) => {
  res.send(res.locals.getAccepted);
})

// gets all rejected posts for admin view (rejected tab)
app.get('/rejected', displayController.getRejected, (req, res) => {
  res.send(res.locals.getRejected);
})

// gets all posted posts for admin view (posted tab)
app.get('/posted', displayController.getPosted, (req, res) => {
  res.send(res.locals.getPosted);
})

app.use((err, req, res, next) => {
  res.send(err);
})


server.listen(3000, () => {
  console.log("listening on port 3000")
});

module.exports = app;
