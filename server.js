const { time, timeStamp } = require('console');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = new Set();

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('new user', (username) => {
        users.add(username);
        socket.username = username;
        io.emit('user joined', {
            username: username,
            userCount: users.size
        });
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', {
            username: socket.username,
            message: msg,
            timestamp: new Date().toLocaleTimeString()
        });
    });

    socket.on('disconnect', () => {
        if (socket.username) {
            users.delete(socket.username);
            io.emit('user left', {
                username: socket.username,
                userCount: users.size
            });
        }
        console.log('user disconnected');
    });

});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});