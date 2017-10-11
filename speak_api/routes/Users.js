var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/:petition_id?', function(req, res, next) {

if(req.params.user_id) {
    User.getUserById(req.params.user_id, function(err,rows) {
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

router.get('/', function(req, res, next) {
    User.getAllUsers(function(err,rows) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function(req, res, next) {
    User.addUser(req.body,function(err,count) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/:user_id', function(req,res,next) {
if(req.params.user_id) {
    User.deleteUser(req.params.user_id, function(err,rows) {
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
