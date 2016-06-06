var express = require('express');
var MovieSchema=require('../model/MovieSchema');
//var mongoose=require('mongoose');
var router = express.Router();
var fs=require('fs');




router.get('/getjson', function (req, res) {
console.log('-------inside getjson--------');

    MovieSchema.find(function(err,data){
      if(err) console.log("Error :"+err);
      console.log(data);
      res.json(data);

    })

});


module.exports = router;
