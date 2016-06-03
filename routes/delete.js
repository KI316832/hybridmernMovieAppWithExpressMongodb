var express = require('express');
var router = express.Router();
var body=require('body-parser');
var jsonfile = require('jsonfile');
var MovieSchema=require('../model/MovieSchema');
var mongoose=require('mongoose');
var db=mongoose.connection;

//db.on("error",console.error.bind(console,"connection error"));
   console.log("inside get request");

router.post('/', function (req, res) {
  console.log("***************");

  var Title=req.body.titleDelete;
    console.log('delete movie title :'+Title);

    db.open('open',function(){
      MovieSchema.find({'Title':Title}).remove().exec(function(err,data){
        if(err){console.log(err);}
        res.redirect('/');
      });
    });
});

module.exports = router;
