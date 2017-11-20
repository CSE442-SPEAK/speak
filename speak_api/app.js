const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
var Users = require('./routes/Users');
var Petitions = require('./routes/Petitions');
var Signatures = require('./routes/Signatures');
require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'
}

app.use(cors());
app.use(morgan('API Request (port 8080): :method :url :status :response-time ms - :res[content-length]'));

app.use('/Users', Users);
app.use('/Petitions', Petitions);
app.use('/Signatures', Signatures);

app.use(function(req,res,next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
	message: err.message,
	error: {}
    });
});
/*

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
} **/

if (module === require.main) {
    const server = app.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    })}


module.exports = app;
