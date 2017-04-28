$(function () {
  /**
   * Javascript for client side message handling using socket.io
   */

  var socket = io();

  /* For sending the message */
  $('#sendMessage').click(function(){
    socket.emit('send message');
  });

  /* When the message is received from the server */
  socket.on('receive message', function(msg){
      $('#message').html(msg);
  });
});

