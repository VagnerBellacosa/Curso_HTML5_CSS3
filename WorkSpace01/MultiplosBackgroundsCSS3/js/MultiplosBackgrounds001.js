 $( "div" ).mousemove(function( event ) {
  var mouseX = event.pageX,
			divW = $(this).width(),
			duration = 30 - (mouseX / divW)*30;
  $(this).css('animation-duration', duration + 's');
	$('.speed').css('width', mouseX);
});