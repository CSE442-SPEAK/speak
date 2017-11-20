var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
var User = require('../models/User');

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

router.get('/email/:email', checkJwt, function(req, res, next) {

if(req.params.email) {
    User.getUserById(req.params.email, function(err,rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}

else {
    User.getAllUsers(function(err,rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
});

router.get('/', checkJwt, function(req, res, next) {
    User.getAllUsers(function(err,rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', checkJwt, function(req, res, next) {
    User.addUser(req.body,function(err,count) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/email/:email', checkJwt, function(req,res,next) {
if(req.params.email) {
    User.deleteUser(req.params.email, function(err,rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
});

module.exports = router;
