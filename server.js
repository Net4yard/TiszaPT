const http = require('http');
const fs = require('fs');
const path = require('path');

const port = parseInt(process.env.PORT || '8080', 10);

const distRootCandidates = [
  path.join(__dirname, 'dist', 'tisza-pt', 'browser'),
  path.join(__dirname, 'dist', 'tisza-pt')
];

const distRoot = distRootCandidates.find((candidate) => fs.existsSync(candidate));

if (!distRoot) {
  console.error('Build output folder not found. Expected one of:', distRootCandidates.join(', '));
  process.exit(1);
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const sendFile = (res, filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
      }

      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal server error');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;

  const requestedFile = path.normalize(path.join(distRoot, normalizedPath));
  if (!requestedFile.startsWith(distRoot)) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }

  if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
    sendFile(res, requestedFile);
    return;
  }

  const spaIndex = path.join(distRoot, 'index.html');
  sendFile(res, spaIndex);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
