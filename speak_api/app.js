const express = require('express');
const config = require('./config');
const app = express();
/**const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');*/
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
app.use(morgan('API Request (port 3001): :method :url :status :response-time ms - :res[content-length]'));

app.use('/Users', Users);
app.use('/Petitions', Petitions);
app.use('/Signatures', Signatures);

app.listen(8080);
console.log('Server listening on http://localhost:8080.')

/**==========================================================
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');
var Users = require('./routes/Users');
var Petitions = require('./routes/Petitions');
var Signatures = require('./routes/Signatures');
const config = require('./config');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',routes);
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
    res.render('error', {
	message: err.message,
	error: {}
    });
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

if (module === require.main) {
    const server = app.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    })}


module.exports = app; */
