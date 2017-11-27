const mysql = require('mysql');
const config = require('../config');

const options = {
    user: config.get('MYSQL_USER'),
    password: config.get('MYSQL_PASSWORD'),
    database: 'speak'
};

options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;

const db = mysql.createPool(options);

var Signature = {

getAllSignatures:function(callback) {
    return db.query("Select * from signature", callback);
},

getSignaturesOfPetition:function(petition_id, callback) {
    return db.query("select user.name from user inner join (select * from signature where signature.petition_id=?) as temp on user.user_id=temp.user_id", [petition_id], callback);
},

getSignaturesOfUser:function(email, callback) {
    return db.query("select * from (select signature.signature_id, signature.petition_id, signature.user_id,user.email from signature inner join user on signature.user_id=user.user_id) as temp where temp.email=?", [email], callback);
},

getSignatureById:function(signature_id, callback) {
    return db.query("Select * from signature where signature_id=?", [signature_id], callback);
},

addSignature:function(Signature, callback) {
  return db.query("select * from signature where petition_id=? and user_id=(select user_id from user where email=?)", [Signature.petition_id, Signature.email], function(err, result){
    if (result.length == 0) {
      return db.query("Insert into signature(petition_id, user_id, date) values(?,(select user_id from user where email=?),?)", [Signature.petition_id, Signature.email, Signature.date], callback);
    } else {
      return "User has already signed this petition.";
    }
  });
},

deleteSignature:function(signature_id, callback){
    return db.query("Delete from signature where signature_id=?", [signature_id], callback);
}
}; // var Signature

module.exports = Signature;
