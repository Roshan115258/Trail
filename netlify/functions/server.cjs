const serverless = require('serverless-http');
const app = require('../../src/app.cjs');

// Export the serverless handler
module.exports.handler = serverless(app);
