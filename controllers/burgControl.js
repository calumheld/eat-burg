var express = require("express");

var router = express.Router();//i have no idea what this does

var burg=require("../models/burg.js");

module.exports = router;

router.get("/",function(req,res){
    burg.all(function(data){
        var hbsObject={
            burgs:data
        };
        res.render("index",hbsObject);
    });
});

router.post("/api/burgs",function(req,res){
    burg.create("name",req.body.name)
})

module.exports=router;