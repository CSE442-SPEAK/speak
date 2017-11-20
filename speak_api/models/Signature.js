const mysql = require('mysql');
const config = require('../config');

const options = {
    host: 'localhost',
    user: config.get('MYSQL_USER'),
    password: config.get('MYSQL_PASSWORD'),
    database: 'speak'
};

//options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;

const db = mysql.createPool(options);

var Signature = {

getAllSignatures:function(callback) {
    return db.query("Select * from signature", callback);
},

getSignaturesOfPetition:function(petition_id, callback) {
    return db.query("Select * from signature where petition_id=?", [petition_id], callback);
},

getSignaturesOfUser:function(user_id, callback) {
    return db.query("Select * from signature where user_id=?", [user_id], callback);
},

getSignatureById:function(signature_id, callback) {
    return db.query("Select * from signature where signature_id=?", [signature_id], callback);
},

addSignature:function(Signature, callback) {
    return db.query("Insert into signature(petition_id, user_id) values(?,?)", [Signature.petition_id, Signature.user_id], callback);
},

deleteSignature:function(signature_id, callback){
    return db.query("Delete from signature where signature_id=?", [signature_id], callback);
}
}; // var Signature

module.exports = Signature;
