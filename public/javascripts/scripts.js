
// Show & hide new idea container

$(document).ready(function(){

        $("#new-idea").hide();
        $(".showbtn").show();

	$('.showbtn').click(function(){
	$("#new-idea").slideToggle();
	});

});


// Show & hide new idea container

$(document).ready(function(){

        $(".slide").hide();
        $(".show").show();

	$('.show').click(function(){
	   $(this).next(".slide").slideToggle();
	});

// check for countdown plugin
if($.fn.countdown) {

  // grab clock element and extract "expires at" timestamp
  var $time = $("time#expires-at"),
      expiresAt = $time.attr('datetime');

  // call countdown() on clock div
  $time.countdown({
    until: expiresAt,
    format: 'DHMS',
  });

}

});