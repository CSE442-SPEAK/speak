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
    const server = app.listen(process.env.PORT || 3001, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    })}


module.exports = app;
