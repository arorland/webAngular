const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, 'dist')));
// const index = path.join(__dirname, 'build', 'index.html');

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const port = process.env.PORT || 9696;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));
