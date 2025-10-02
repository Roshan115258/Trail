const serverless = require('serverless-http');
const app = require('../../src/app');

// Export the serverless handler
module.exports.handler = serverless(app);
