const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

// Exposes the folder frontend
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

io.on('connection', function (socket) {
    //Welcome a new user
    io.emit('welcome', 'A new user joined the chat');
    socket.on('msg', function (data) {
        //New message
	    var username = data.user;
	    var message = data.msg;
	io.emit('newmsg', {
	user : username,
	msg : message
	});
});

server.listen(process.env.PORT || 3000, () => {
	console.log(`Server is listening on port: ${server.address().port}`);
});
