var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'',
database:'speak',
//insecureAuth: true

});

module.exports=connection;
