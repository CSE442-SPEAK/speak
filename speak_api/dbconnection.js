var mysql = require('mysql');
const extend = require('lodash').assign;

const options = {
	user: config.get('MYSQL_USER'),
	password: config.get('MYSQL_PASSWORD'),
	database:'bookshelf'
};

if (config.get('INSTANCE_CONNECTION_NAME') && config.get('NODE_ENV') === 'production') {
	options.socketPath = `/cloudsql/${confin.get('INSTANCE_CONNECTION_NAME')}`
}

const connection = mysql.createConnection(options);

module.exports=connection;
