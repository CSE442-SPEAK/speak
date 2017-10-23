var express = require('express');
var router = express.Router();
var Petition = require('../models/Petition');

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

router.get('/user_id/:user_id', function(req, res, next) {
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

router.post('/', function(req, res, next) {
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
