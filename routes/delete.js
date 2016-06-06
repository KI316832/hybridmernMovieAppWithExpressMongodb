var express = require('express');
var router = express.Router();
var body=require('body-parser');
var jsonfile = require('jsonfile');
var MovieSchema=require('../model/MovieSchema');
var mongoose=require('mongoose');
//var db=mongoose.connection;


console.log("inside delete request");

router.post('/', function (req, res) {
  console.log("***************");

  var id=req.body.idDelete;
    console.log('<<<delete movie title>>> :'+id);

  //  db.open('open',function(){
      MovieSchema.findByIdAndRemove(id,function(err){
        if(err){console.log(err);}
        console.log('-----delete-----');
        res.redirect('/');
    //  });
    });
});

module.exports = router;
