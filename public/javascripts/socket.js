//alert('hello');
var socket = io.connect('http://webflow:3000');
socket.on('logme', function (data) {
  console.log(data);
  socket.emit('some event', { my: 'data' });
});
