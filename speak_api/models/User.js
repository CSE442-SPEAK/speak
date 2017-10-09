var db = require('../dbconnection');

var User = {

getAllUsers:function(callback) {
    return db.query("Select * from user", callback);
},

getUserById:function(id, callback){
    return db.query("Select * from user where id=?", [id], callback);
},

addUser:function(User, callback){
    return db.query("Insert into user values(?,?,?,?,?,?,?)", [User.name, User.email, User.ubit, User.type, User.major], callback);
},

deleteUser:function(id, callback){
    return db.query("Delete from user where id=?", [id], callback);
},

updateUser:function(id, User, callback){
    return db.query("Update user set name=?,email=?,ubit=?,type=?,major=? where petition_id=?", [User.name, User.email, User.ubit, User.type, User.major, id], callback);
},

getUsersOfType:function(type, callback){
    return db.query("Select * from user where type=?", [type], callback);
}

getUsersOfMajor:function(major, callback){
    return db.query("Select * from user where major=?", [major], callback);
},

getUserEmail:function(id, callback){
    return db.query("Select email from user where id=?", [id], callback);
},

getUserUbit:function(id, callback) {
    return db.query("Select ubit from user where id=?", [id], callback);
},

getUserType:function(id, callback) {
    return db.query("Select type from user where id=?", [id], callback);
},

getUserMajor:function(id, callback) {
    return db.query("Select major from user where id=?", [id], callback);
},

};

module.exports = User;
