const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');

// Serve up public/ftp folder
const serve = serveStatic('dist', { index: ['index.html', 'index.htm'] });

// Create server
const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(3000);
console.log('Local server running on 3000');
