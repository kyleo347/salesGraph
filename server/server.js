var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());

var PRODUCT_FILE = path.join(__dirname, 'product.json');
console.log(PRODUCT_FILE);
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/product', function(req, res) {
  fs.readFile(PRODUCT_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.description = "Internal Error";
      res.send(err);
    }
    else {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
