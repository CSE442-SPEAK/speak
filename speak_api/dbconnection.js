var mysql = require('mysql');
const extend = require('lodash').assign;
const config = require('./config');
console.log(config);
const options = {
	user: config.get('MYSQL_USER'),
	password: config.get('MYSQL_PASSWORD'),
	database:'bookshelf'
};

if (config.get('INSTANCE_CONNECTION_NAME') && config.get('NODE_ENV') === 'production') {
	options.socketPath = `/cloudsql/${confin.get('INSTANCE_CONNECTION_NAME')}`
}



function createSchema (config) {
  const connection = mysql.createConnection(extend({
    multipleStatements: true
  }, config));

  connection.query(
		`CREATE DATABASE IF NOT EXISTS \`speak\`
			DEFAULT CHARACTER SET = 'utf8'
			DEFAULT COLLATE 'utf8_general_ci'
		USE \`speak\`;

		CREATE TABLE IF NOT EXISTS \`speak\`.\`petition\` (
		  \`petition_id\` int not null auto_increment,
		  \`title\` varchar(500) not null,
		  \`description\` text(1500),
		  \`tags\` varchar(500),
		  \`owner\` int not null,
		  \`category\` varchar(100),
		  \`permissions\` varchar(100),
		  \`deadline\` date,
		  \`signature_goal\` int,
		  \`signatures\` int default 0,
		  PRIMARY KEY(\`petition_id\`));

		CREATE TABLE IF NOT EXISTS \`user\` (
		  \`user_id\` int not null auto_increment,
		  \`name\` varchar(100) not null,
		  \`email\` varchar(100),
		  \`ubit\` int,
		  \`type\` varchar(100),
		  \`major\` varchar(100),
		  PRIMARY KEY(\`user_id\`));

		CREATE TABLE IF NOT EXISTS \`signature\` (
		  \`signature_id\` int not null auto_increment,
		  \`petition_id\` int not null,
		  \`user_id\` int not null,
		  PRIMARY KEY(\`signature_id\`));`
    (err) => {
      if (err) {
        throw err;
      }
      console.log('Successfully created schema');
      return connection;
    }
  );
}

connection = createSchema(options);

module.exports=connection;
