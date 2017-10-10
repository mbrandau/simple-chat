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
	// Prompt user for username clientside
	// Welcome user in chat with name
	socket.on('name', name => {
		// Save the username and join timestamp
		socket.meta = {
			username: name,
			joinedAt: Date.now()
		};
		
		// Emit a join event
		io.emit('join', {
			user: socket.meta.username,
			time: socket.meta.joinedAt
		});
		
		//New message
		socket.on('msg', msg => {
			const timestamp = Date.now();
			// Send the message to all users
			io.emit('msg', {
				user : socket.meta.username,
				msg : msg,
				time: timestamp
			});
		});
		
		// Handle disconnect
		socket.on('disconnect', reason => {
			const timestamp = Date.now();
			// Emit a leave event
			io.emit('leave', {
				user: socket.meta.username,
				time: timestamp,
				duration: timestamp - socket.meta.joinedAt
			});
		});
	});
});

server.listen(process.env.PORT || 80, () => {
	console.log(`Server is listening on port: ${server.address().port}`);
});
