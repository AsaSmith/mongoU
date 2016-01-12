var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
    bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// add db name below
MongoClient.connect('mongodb://localhost:27017/mongo_university', function(err, db){

  assert.equal(null, err);
  console.log('Successfully connected to MongoDB');

  app.get('/', function(req, res){
    res.render('index.jade');
  });

  app.post('/', function(req, res){
    
  })
  var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Expess server lisening on port %s ', port);
  });

});
