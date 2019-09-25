const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 19000;

const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-58x2s.mongodb.net/chat?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

io.on('connection', socket => {
    console.log('a user connected...');
    socket.on('chat message', message => {
        console.log(message);
        io.emit('chat message', message);
    });
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => console.log('connection is open on port: ' + port));
