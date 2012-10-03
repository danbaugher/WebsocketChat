//alert('hello');

sendmessage = function(msg, socket){
  
}
var socket = io.connect();
socket.on('logme', function (data) {
  console.log(data);
  socket.emit('some event', { my: 'data' });
});
socket.on('append message', function(data){
  $('#chatroomwin').append(data.message + "\n");
  $("#chatroomwin").scrollTop($("#chatroomwin")[0].scrollHeight);
});
$(document).ready(function(){
$('#wrapper').on('click', '.sendmessage', function(e){
  //cliecked send message get 
  console.log($('#saytext').val());
  socket.emit('room message', { message: $('#saytext').val()}); 
});
$('#saytext').on('keyup', function(e){
  //console.log(e.keyCode);
  if(e.keyCode == 13){
    $('.sendmessage').trigger('click');
  }
$('.draggable').draggable();
});
});
