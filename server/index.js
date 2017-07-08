const express = require ('express');
let MongoClient = require ('mongodb').MongoClient;
let bodyParser = require('body-parser');
let fs = require ('fs');
let multer = require ('multer');
let db;

const app = express();

let url = 'mongodb://localhost:27017/Personal-DB';
MongoClient.connect(url, function(err, database) {
  db = database;
  console.log("Connected correctly to server.");
});


// Headers that allow me to post, get, and patch data from the client
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, HEAD, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

/* Simple Get Function */
app.get("/getProjectData", function(req, res) {
  db.collection("Data").find().toArray(function(err, result) {
  if (err){
    res.send(err);
  } else {
    res.send({"Projects": result});
  }
  });
});

let storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    console.log("set file destination");
      cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

let upload = multer({ //multer settings
  storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/uploads', function(req, res) {
  upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }
    res.json({error_code:0,err_desc:null});
  });
});

app.listen('3000', function(){
  console.log('running on 3000...');
});
