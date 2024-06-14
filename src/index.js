const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <body>
          <h1>Hello World</h1>
          <img src="/nodejs-logo.png" alt="Node.js Logo">
        </body>
      </html>
    `);
  } else if (req.url === '/nodejs-logo.png') {
    const imagePath = path.join(__dirname, 'nodejs-logo.png');
    fs.readFile(imagePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Image not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});