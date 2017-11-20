const nconf = module.exports = require('nconf');
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'DATA_BACKEND',
    'GCLOUD_PROJECT',
    'INSTANCE_CONNECTION_NAME',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'NODE_ENV',
    'PORT',
    'CLOUD_BUCKET',
    'MEMCACHE_URL',
    'OAUTH2_CLIENT_ID',
    'OAUTH2_CLIENT_SECRET',
    'OAUTH2_CALLBACK',
    'SECRET'
  ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({
    // dataBackend can be 'datastore', 'cloudsql', or 'mongodb'. Be sure to
    // configure the appropriate settings for each storage engine below.
    // If you are unsure, use datastore as it requires no additional
    // configuration.
    DATA_BACKEND: 'datastore',

    // This is the id of your project in the Google Cloud Developers Console.
    GCLOUD_PROJECT: 'speak-api-186516',

    MYSQL_USER: 'userA',
    MYSQL_PASSWORD: '',

    PORT: 3001
  });

// Check for required settings
checkConfig('GCLOUD_PROJECT');

if (nconf.get('DATA_BACKEND') === 'cloudsql') {
  checkConfig('MYSQL_USER');
//  checkConfig('MYSQL_PASSWORD');
  if (nconf.get('NODE_ENV') === 'production') {
    checkConfig('INSTANCE_CONNECTION_NAME');
  }
}

function checkConfig (setting) {
  if (!nconf.get(setting)) {
    throw new Error(`You must set ${setting} as an environment variable or in config.json!`);
  }
}
