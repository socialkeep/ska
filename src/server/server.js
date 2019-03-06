const path = require('path');
const express = require('express');
const http = require ('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const imageController = require('./controllers/image-controller');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });


app.use(cors());
app.use(express.static(path.resolve(__dirname, '../build')));

app.post('/api/addPhoto', upload.single('file'), imageController.addPhoto,(req,res) => {
  res.status(200).json({result: "LOGGED IN"});
});

app.get('/pending', (req,res) =>{
  res.status(200).json({done:true});
})

server.listen(3000, () => {
  console.log("listening at port 3000")
});


module.exports = app;
