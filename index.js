//npm init
//nodejs <filename.js>
//this program listens to client request
//npm install --save module or npm install

var express = require('express');
var app = express(); // app as an instance of express

var server = app.listen(5000,function(){//app.listen(port,function)
      var host = server.address().address;
      var port = server.address().port;
      console.log('Example app listening at http://%s:%s',host,port);//prints in console
   });
   
//BASIC ROUNTING
//Routing->determines how an app respond to a client request
//routes are under express module
//get post put delete -methods
//app.<method> (<path>, <callback-response to client request>);
//app.get('/',function (req,res){//->anonymous function(no names bound)
 //     res.send('Hello world'); }); //prints Hello world sa localhost:5000
      
      
/*app.route('/students')
            .get(function(req,res){res.send('get student');})
            
            .post(function(req,res){res.send('add a student');})
           
            .put(function(req,res){res.send('update a student');});
*/

app.use(require('body-parser')());//module for accepting forms/payloads and requests
app.use(require('method-override')());//module for mimicking put and delete using post
app.use(require(__dirname + '/config/router')(express.Router()));//__dirname ->where ur script is   
app.use(express.static(__dirname + '/public'));         
         
/*
   EXPRESS ROUTER
   express.Router class creates modular mountable route handlers
*/

//install mocha npm install -g mocha ->used in all wep apps in pc