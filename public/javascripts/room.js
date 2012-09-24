var chatroom = {
  roomId: '',
  roomTitle: '',
  roomWrap: '',
  
  init: function(id){
    this.roomId = id;
    this.roomWrap = createElement('div');
    this.roomWrap.setAttribute('id', 'room' + id);
    
  },
  getMembers: function(){
    //get a list of the current users in a chat room
    
  }
  
}
