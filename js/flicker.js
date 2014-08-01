var down = function(){
  $('#flicker').css({'background-image' : 'url("./img/horizontal-1.png")'});
  $('#access').css({'color' : 'rgba(190,190,190,0.8)'});
  $('#flicker').stop().animate({top:'+=' + '20' + 'px',duration: 1000},{complete: function(){$('#access').css({'color' : 'white'});$('#flicker').css({'background-image' : 'none'});}});
}
var up = function(){
  $('#flicker').css({'background-image' : 'url("./img/horizontal-1.png")'});
  $('#access').css({'color' : 'rgba(190,190,190,0.8)'});
  $('#flicker').stop().animate({top:'-=' + '20' + 'px',duration: 1000},{complete: function(){$('#access').css({'color' : 'white'});$('#flicker').css({'background-image' : 'none'});}});
}

var state = 'down'
setInterval(function(){
  if(state == 'down'){
    up();
    state = 'up';
  }else{
    down();
    state = 'down';
  }
},2000);