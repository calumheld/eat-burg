var orm=require("../config/orm.js");

var burg={
    all:function(cb){
        orm.all("burgs",function(res){
            cb(res);
        });
    },
    create:function(val,cb){
        orm.create("burgs",val,cb,function(res){
            cb(res);
        });
    }
}

module.exports=burg;