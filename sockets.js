exports.start = function(io){
  io.sockets.on('connection', function(socket){
    socket.emit('logme', { logdata: 'connected to server'});
    socket.on('some event', function(data){
      console.log('client event contacted server');
    });
    socket.on('room message', function(data){
      //Incoming message
      console.log('room message sent by client');
      io.sockets.emit('append message', { message: data.message });
    });
  });
}
