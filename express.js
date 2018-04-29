var express = require('express');
var app = express();

//app.use(express.static('dist'));
app.use('/dist/', express.static('dist'));

app.get('/test', function(req, res) {
  res.json({
    "error": 404
  });
});

app.get('*', function(req, res) {
  res.send(404);
});

app.listen(3000);