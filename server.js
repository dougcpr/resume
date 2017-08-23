var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');

/* server set-up */
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/* end server set-up */


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var http = require("http");
setInterval(function() {
  http.get("https://doug-personal-site.herokuapp.com");
}, 300000); // every 5 minutes (300000)

var listener = app.listen(process.env.PORT || 8080, function() {
  console.log('Server started at http://localhost:' + listener.address().port);
});
