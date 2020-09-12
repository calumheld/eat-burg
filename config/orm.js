var connection=require("../config/connection.js");



var orm={
    all: function(input,cb){
        var queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            });
    },
    create: function(table,val,cb){
        var queryString="INSERT INTO "+table+" (name) VALUES ("+val+")";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}



module.exports=orm;