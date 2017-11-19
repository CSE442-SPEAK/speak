var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
var Petition = require('../models/Petition');
require('dotenv').config();

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

const checkScopes = jwtAuthz(['create:petitions'])

router.get('/', function(req, res, next) {

  Petition.getAllPetitions(function(err, rows) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.get('/:petition_id', function(req, res, next) {

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
    Petition.getAllPetitions(function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in petition_id

router.get('/user_id/:user_id', checkJwt, function(req, res, next) {
if(req.params.user_id) {
    Petition.getPetitionsOfUser(req.params.user_id, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in user_id

router.post('/', checkJwt, checkScopes, function(req, res, next) {
	Petition.addPetition(req.body,function(err,count) {
		if(err) {
			res.json(err);
		}
		else {
			res.json(res.body);
		}
	});

});

module.exports = router;
