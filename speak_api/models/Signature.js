var db = require('../dbconnection');

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
    return db.query("Insert into signature values(?,?,?)", [Signature.petition_id, Signature.user_id, Signature.date], callback);
},

deleteSignature:function(signature_id, callback){
    return db.query("Delete from signature where signature_id=?", [signature_id], callback);
}
}; // var Signature

module.exports = Signature;
