const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const log = require('beautiful-logs')();

const app = express();
const server = http.Server(app);
const io = socketIO(server);

log.info('simple-chat is starting...');

// Exposes the folder frontend
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

io.on('connection', function(socket) {
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

    //Log user join event
    log.debug("User: " + socket.meta.username + " has joined.")

    //New message
    socket.on('msg', msg => {
      const timestamp = Date.now();
      // Send the message to all users
      io.emit('msg', {
        user: socket.meta.username,
        msg: msg,
        time: timestamp
      });
      //Log user send message event
      log.debug("User: " + socket.meta.username + " has send a message: " + msg);
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
      //Log user leave event
      log.debug("User: " + socket.meta.username + " has left after " + (timestamp - socket.meta.joinedAt));
    });
  });
});

server.on('error', error => {
  log.err(`Error while starting the server`, error);
});

server.listen(process.env.PORT || 80, () => {
  log.info(`Server is listening on port: ${server.address().port}`);
});
