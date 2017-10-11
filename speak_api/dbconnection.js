var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'',
database:'speak',
//insecureAuth: true

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports=connection;
