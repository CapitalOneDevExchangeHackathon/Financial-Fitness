    //////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////Setting up Express Server App///////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
//put at top so it can be passed down
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

    //////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////Adding Middleware////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////
 //transparent middleware//
//////////////////////////
app.use(function(req, res, next){
    console.log(req.url);
    next();
});


  //////////////////////////
 ///public static folder///
//////////////////////////
app.use(express.static('public'));

  //////////////////////////
 //////404/500 Errors//////
//////////////////////////
app.use(function(req, res, next){
    res.status(404);
    res.send('404 file not found! D:');
});

app.use(function(err, req, res, next){
    res.status(500);
    res.send('500 Server Error!');
});


    //////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////Starting the Express Server ///////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

app.listen(8080, function(){
    console.log('LUKE, I AM YOUR SERVER...[listin in porta 8080]');
});