var express = require('express');
var router = express.Router();
var Signature  = require('../models/Signature');

router.get('/', function(req, res, next) {
    Signature.getAllSignatures(function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:signature_id', function(req, res, next) {

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
    Signature.getAllSignatures(function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in signature_id

router.get('/petition_id/:petition_id', function(req, res, next) {

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

router.get('/user_id/:user_id', function(req, res, next) {

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

/*
router.post('/:signature_id', function(req, res, next) {

if(req.params.signature_id) {
    Signature.addSignature(req.params.signature_id, req.body, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
else {
    Signature.addSignature(req.body, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // POST request, passing in signature_id */

router.post('/', function(req, res, next) {

    Signature.addSignature(req.body, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

}); // POST request, passing in user_id and petition_id


router.delete('/:signature_id', function(req, res, next) {

    Signature.deleteSignature(req.param.signature_id, function(err, count) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
}); // DELETE request, passing in signature_id

module.exports = router;
