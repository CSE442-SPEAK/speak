const mysql = require('mysql');
const config = require('../config');

const options = {
    user: config.get('MYSQL_USER'),
    password: config.get('MYSQL_PASSWORD'),
    database: 'speak'
};

options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;

const db = mysql.createPool(options);

var User = {

getAllUsers:function(callback) {
    return db.query("Select * from user", callback);
},

getUserById:function(email, callback){
    return db.query("Select * from user where email=?", [email], callback);
},

addUser:function(User, callback){
  return db.query("select * from user where email=?", [User.email], function(err, result){
    if(result.length == 0) {
      return db.query("Insert into user(name,email,ubit,type,major) values(?,?,?,?,?)", [User.name, User.email, User.ubit, User.type, User.major], callback);
    } else {
      return "User already in database.";
    }
  });
},

deleteUser:function(user_id, callback){
    return db.query("Delete from user where user_id=?", [user_id], callback);
},

updateUser:function(user_id, User, callback){
    return db.query("Update user set name=?,email=?,ubit=?,type=?,major=? where user_id=?", [User.name, User.email, User.ubit, User.type, User.major, user_id], callback);
},

getUsersOfType:function(type, callback){
    return db.query("Select * from user where type=?", [type], callback);
},

getUsersOfMajor:function(major, callback){
    return db.query("Select * from user where major=?", [major], callback);
},

getUserEmail:function(user_id, callback){
    return db.query("Select email from user where user_id=?", [user_id], callback);
},

getUserUbit:function(user_id, callback) {
    return db.query("Select ubit from user where user_id=?", [user_id], callback);
},

getUserType:function(user_id, callback) {
    return db.query("Select type from user where user_id=?", [user_id], callback);
},

getUserMajor:function(user_id, callback) {
    return db.query("Select major from user where user_id=?", [user_id], callback);
},

deleteUser:function(user_id, callback) {
    return db.query("Delete from user where user_id=?", [user_id], callback);
}

};

module.exports = User;
