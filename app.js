var express = require('express');

//var routes = require('./routes');


var http = require('http');
var path = require('path');
var urlencoded = require('url');
var bodyParser = require('body-parser');
var json = require('json');
var logger = require('logger');
var methodOveride = require('method-override');
var nano = require('nano')('http://localhost:5948');
var db = nano.use('address');
var app = express();


app.set('port', process.env.PORT || 3000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//app.set('views', path.join(__dirname,'views'));
//app.set("view engine","jade");

app.get('/', function(req,res){
    res.send('You landed here');
});

// Items Api's
app.post('/item', function(req,res){

});

app.post('/item/<item_id>', function(req,res){
    
});

app.get('/item/<item_id>', function(req,res){
    
});

app.get('/item', function(req,res){

});


//


http.createServer(app).listen(app.get('port'),function(){
    console.log("Server listening on port " + app.get('port'));
});












