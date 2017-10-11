var db = require('../dbconnection');

var Petition = {

getAllPetitions:function(callback) {
    return db.query("Select * from petition", callback);
},

getPetitionById:function(petition_id, callback){
    return db.query("Select * from petition where petition_id=?", [petition_id], callback);
},

getCreatorOfPetition:function(petition_id, callback){
    return db.query("Select owner from petition where petition_id=?", [petition_id], callback);
},

addPetition:function(Petition, callback){
    return db.query("Insert into petition(title, description, owner, signature_goal) values(?,?,?,?)", [Petition.title, Petition.description, Petition.owner, Petition.signature_goal], callback);
},

deletePetition:function(petiton_id, callback){
    return db.query("Delete from petition where petition_id=?", [petition_id], callback);
},

updatePetition:function(petition_id, Petition, callback){
    return db.query("Update petition set title=?,status=? where petition_id=?", [Petition.title, Petition.status, petition_id], callback);
},

getPetitionsOfUser:function(user_id, callback){
    return db.query("Select * from petition where user_id=?", [user_id], callback);
},

getPetitionsOfCategory:function(category, callback){
    return db.query("Select * from petition where category=?", [category], callback);
},

getPetitionStatus:function(petition_id, callback){
    return db.query("Select petition_status from petition where petition_id=?", [petition_id], callback);
},

getPetitionTitle:function(petition_id, callback){
    return db.query("Select title from petition where petition_id=?", [petition_id], callback);
},

getPetitionDescription:function(petition_id, callback){
    return db.query("Select description from petition where petition_id=?", [petition_id], callback);
},

getPetitionTags:function(petition_id, callback){
    return db.query("Select tags from petition where petition_id=?", [petition_id], callback);
},

// I.E. who_can_sign
getPetitionPermissions:function(petition_id, callback){
    return db.query("Select permissions from petition where petition_id=?", [petition_id], callback);
},

getPetitionCategory:function(petition_id, callback){
    return db.query("Select category from petition where petition_id=?", [petition_id], callback);
},

getPetitionSignatureCount:function(petition_id, callback){
    return db.query("Select signature_count from petition where petition_id=?", [petition_id], callback);
},

updatePetitionSignatureCount:function(petition_id, count, callback) {
    return db.query("Update petition set count=?, where petition_id=?",[count,petition_id],callback);
},

// Petition date of creation
getPetitionDate:function(petition_id, callback){
    return db.query("Select date from petition where petition_id=?", [petition_id], callback);
},

// How long the petition has been live
getPetitionAge:function(petition_id, callback){
    return db.query("Select age from petition where petition_id=?", [petition_id], callback);
},

getPetitionDeadline:function(petition_id, callback){
    return db.query("Select deadline from petition where petition_id=?", [petition_id], callback);
},

getPetitionSignatureGoal:function(petition_id, callback){
    return db.query("Select signature_goal from petition where petition_id=?", [petition_id], callback);
},

getPetitionResponse:function(petition_id, callback){
    return db.query("Select response from petition where petition_id=?", [petition_id], callback);
},

getPetitionUpdates:function(petition_id, callback){
    return db.query("Select updates from petition where petition_id=?", [petition_id], callback);
}

}; // var Petition

module.exports = Petition; 

