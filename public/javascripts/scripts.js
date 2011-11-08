
// Show & hide new idea container

$(document).ready(function(){

  $("#new-idea").hide();
  $(".showbtn").show();

	$('.showbtn').click(function(){
	$("#new-idea").slideToggle();
	});

  $(".slide").hide();
  $(".show").show();

	$('.show').click(function(){
	   $(this).next(".slide").slideToggle();
	});
	
	
	var $time = $("time#expires-at"),
      timestamp = Date.parse($time.attr('datetime')),
      expiresAt = new Date(timestamp);
      
  $time.countdown({
    until: expiresAt,
    format: 'dHMS'
  });

});