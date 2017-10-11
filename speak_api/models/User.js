var db = require('../dbconnection');

var User = {

getAllUsers:function(callback) {
    return db.query("Select * from user", callback);
},

getUserById:function(user_id, callback){
    return db.query("Select * from user where user_id=?", [user_id], callback);
},

addUser:function(User, callback){
    return db.query("Insert into user(user_id,name,email,ubit,type,major) values(?,?,?,?,?,?)", [User.user_id,User.name, User.email, User.ubit, User.type, User.major], callback);
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

};

module.exports = User;
