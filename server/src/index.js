const app = require('./app');
const http = require('http');


const port = process.env.PORT || 5003;
const server = http.createServer(app);

server.listen(port);
console.log(`Listening: http://localhost:${port}`);
