const http = require('http');
const { argv } = require('process');
const port = 3000;

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    const nombre = argv[2];
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>HEEEE ${nombre}</h1>`);
  })
  .listen(port);

console.log(`Server running at http://localhost:${port}/`);
