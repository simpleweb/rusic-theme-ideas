$(document).ready(function(){

    // Show & hide new idea container
    $(".slide").hide();
    $(".show").show();
    
    $('.show').click(function(){
    $(this).next(".slide").slideToggle();
    });

    // Show & hide new idea container
    $("#new-idea").hide();
    $(".showbtn").show();
    
    $('.showbtn').click(function(){
    $("#new-idea").slideToggle();
    });

    // check for countdown plugin
    if($.fn.countdown) {
        // grab clock element and extract "expires at" timestamp
    	var $time = $("time#expires-at"),
          timestamp = Date.parse($time.attr('datetime')),
          expiresAt = new Date(timestamp);
          $time.countdown({
            until: expiresAt,
            format: 'dHMS'
          });
                 
}
});