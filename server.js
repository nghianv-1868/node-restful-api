// Define dependences
const http = require('http');
const app = require('./app');

// Port
const port = process.env.PORT || 8888;

// Create Server
const server = http.createServer(app);

// List a port
server.listen(port);
