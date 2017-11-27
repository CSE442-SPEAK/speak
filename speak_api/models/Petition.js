const mysql = require('mysql');
const config = require('../config');

const options = {
    user: config.get('MYSQL_USER'),
    password: config.get('MYSQL_PASSWORD'),
    database: 'speak'
};

options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;

var db = mysql.createPool(options);

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
    return db.query("insert into petition (title,description,owner) values (?,?, (select user_id from user where email=?));", [Petition.title, Petition.description, Petition.owner], callback);
},

deletePetition:function(petiton_id, callback){
    return db.query("Delete from petition where petition_id=?", [petition_id], callback);
},

updatePetition:function(petition_id, Petition, callback){
    return db.query("Update petition set title=?,status=? where petition_id=?", [Petition.title, Petition.status, petition_id], callback);
},

getPetitionsOfUser:function(email, callback){
    return db.query("select * from (select * from petition inner join user on petition.owner=user.user_id) as temp where temp.email=?", [email], callback);
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
    return db.query("select count(signature_id) from signature where petition_id=?", [petition_id], callback);
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

deletePetition:function(petition_id, callback) {
    return db.query("Delete from petition where petition_id=?", [petition_id], callback);
}

}; // var Petition

module.exports = Petition;
