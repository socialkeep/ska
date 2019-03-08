// routes
import express from 'express';

const app = express();

// access home page (post submission form)
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// when 'submit' is clicked on post submission form, sends you to thank you page
app.post('/createpost', (req, res) => {
  res.send('Thank you for submitting a post!');
});

// takes you from admin login to admin content view
app.get('/login', (req, res) => {

});

// updates content from pending to approved or rejected, also can update from approved to posted
app.post('/updatecontent', (req, res) => {

})

// gets all pending posts for admin view (pending tab)
app.get('/pending', (req, res) => {

})

// gets all accepted posts for admin view (accepted tab)
app.get('/accepted', (req, res) => {

})

// gets all rejected posts for admin view (rejected tab)
app.get('/rejected', (req, res) => {

})

// gets all posted posts for admin view (posted tab)
app.get('/posted', (req, res) => {

})