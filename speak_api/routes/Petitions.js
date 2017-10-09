var express = require('express');
var router = express.Router();
var Petition = require('../models/Petition');

router.get('/:petition_id?', function(req, res, next) {

if(req.params.petition_id) {
    Petition.getPetitionById(req.params.petition_id, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
else {
    Task.getAllPetitions(
