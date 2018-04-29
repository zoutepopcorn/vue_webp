var express = require('express');
var app = express();

//app.use(express.static('dist'));
app.use('/dist/', express.static('dist'));

app.get('/test', function(req, res) {
  res.json({
    "error": 404
  });
});

app.get('/api/:page', function(req, res) {
  res.json({
    "api": "get"
  });
});

app.get('*', function(req, res, next) {
  res.status(404);
  res.send('');
});

app.listen(3000)