var titleCenter = function(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var selfWidth = $('#topTitle').width();
  var selfHeight = $('#topTitle').height();
  $('#topTitle').css({
    'top': (winHeight - selfHeight)/2,
    'left': (winWidth - selfWidth)/2
  });
  counterPosition(winHeight/2 + selfHeight/2);
}

var counterPosition = function(pareHeight){
  var winWidth = $(window).width();
  var selfWidth = $('#counter').width();
  var selfHeight = $('#counter').height();
  $('#counter').css({
    'top': pareHeight - selfHeight/2,
    'left': (winWidth - selfWidth)/2
  });
  accessCenter(pareHeight - selfHeight/2);
}

var accessCenter = function(pareHeight){
  var winWidth = $(window).width();
  var selfWidth = $('#access').width();
  var selfHeight = $('#access').height();
  $('#access').css({
    'top': pareHeight + selfHeight,
    'left': (winWidth - selfWidth)/2
  });
}