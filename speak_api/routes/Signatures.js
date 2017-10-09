s = require('express');
var router = express.Router();
var Signature  = require('../models/Signature');

router.get('/:signature_id?', function(req, res, next) {

if(req.params.signature_id) {
    Signature.getSignatureById(req.params.signature_id, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}

else {
    Task.getAllSignatures(function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in signature_id

router.get('/:petition_id?', function(req, res, next) {

if(req.params.petition_id) {
    Signature.getSignaturesOfPetition(req.params.petition_id, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in petition_id

router.get('/:user_id?', function(req, res, next) {

if(req.params.user_id) {
    Signature.getSignaturesOfUser(req.params.user_id, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in user_id

module.exports = router;

