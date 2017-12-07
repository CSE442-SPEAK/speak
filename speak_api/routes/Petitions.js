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
    jwksUri:`https://speak-ub.auth0.com/.well-known/jwks.json`
  }),

  audience:`https://speak-api-186516.appspot.com/`,
  issuer:`https://speak-ub.auth0.com/`,
  algorithms: ['RS256']
});

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

router.get('/:petition_id/count', function(req, res, next) {
  if (req.params.petition_id) {
    Petition.getPetitionSignatureCount(req.params.petition_id, function(err, count) {
      if(err) {
        res.json(err);
      } else {
        res.json(count);
      }
    })
  }
})

router.get('/email/:email', checkJwt, function(req, res, next) {
if(req.params.email) {
    Petition.getPetitionsOfUser(req.params.email, function(err, rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}
}); // GET request, passing in user_id

router.post('/', checkJwt, function(req, res, next) {
	Petition.addPetition(req.body,function(err,count) {
		if(err) {
			res.json(err);
		}
		else {
			res.json(res.body);
		}
	});
});

router.delete('/:petition_id', checkJwt, function(req, res, next) {
  Petition.deletePetition(req.params.petition_id, function(err, ret) {
    if (err) {
      res.json(err);
    } else {
      res.json(ret);
    }
  })
})



module.exports = router;
