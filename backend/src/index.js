const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;

mongoose.connect('mongodb+srv://admin:admin@cluster0-hn3qw.mongodb.net/test?retryWrites=true&w=majority', {
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

server.listen(port, () => console.log('connection is open on port: ' + port));
