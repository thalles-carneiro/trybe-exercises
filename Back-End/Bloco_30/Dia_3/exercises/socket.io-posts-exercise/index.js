const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

app.use(cors());

app.use(express.static(__dirname + '/public'));

const current = {
  likes: 0,
  stars: 0,
};

require('./sockets/feed')(io, current);

http.listen(3000, () => { console.log('Listening on port: 3000'); })
