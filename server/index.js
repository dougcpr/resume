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

/* Get Portfolio Data Function */
app.get("/getProjectData/portfolio-data", function(req, res) {
  db.collection("portfolio").find().toArray(function(err, result) {
  if (err){
    res.send(err);
  } else {
    res.send({"data": result});
  }
  });
});

/* Get Proficiency Data Function */
app.get("/getProjectData/proficiency-data", function(req, res) {
  db.collection("proficiency").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send({"data": result});
    }
  });
});

/* Get About Me Data Function */
app.get("/getProjectData/about-me-data", function(req, res) {
  db.collection("about-me").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send({"data": result});
    }
  });
});

app.listen('3000', function(){
  console.log('running on 3000...');
});
