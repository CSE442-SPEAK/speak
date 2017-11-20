var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
var Signature  = require('../models/Signature');


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri:`https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  audience:process.env.AUTH0_AUDIENCE,
  issuer:'https://${process.env.AUTH0_DOMAIN}/',
  algorithms: ['RS256']
});



router.get('/', checkJwt, jwtAuthz(['read:signatures']),function(req, res, next) {
    Signature.getAllSignatures(function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:signature_id', checkJwt, jwtAuthz(['read:signatures']), function(req, res, next) {

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

router.get('/petition_id/:petition_id', checkJwt, jwtAuthz(['read:signatures']),function(req, res, next) {

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

router.get('/email/:email', checkJwt, jwtAuthz(['read:signatures']), function(req, res, next) {

if(req.params.email) {
    Signature.getSignaturesOfUser(req.params.email, function(err, rows) {
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

router.post('/', checkJwt, jwtAuthz(['write:signatures']),function(req, res, next) {

    Signature.addSignature(req.body, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

}); // POST request, passing in user_id and petition_id


router.delete('/:signature_id', checkJwt, jwtAuthz(['delete:signatures']),function(req, res, next) {

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
