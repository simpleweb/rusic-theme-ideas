$(document).ready(function(){

    $("#entry_form").validate();

    $(function() {

        var $sidebar = $("#share-page"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 20;

        $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
        $sidebar.stop().animate({
        marginTop: $window.scrollTop() - offset.top + topPadding
        });

        } else {
        $sidebar.stop().animate({
        marginTop: 0
        });
        }
        });

    });

    // AJAXIFY LIKE BUTTONS
function attachLiking() {
    
    $('a.like', '.actions-menu').on('click', function() {

        var likeLink = $(this);

        $.post(likeLink.attr('href'), function(data) {
          $('body').append('<div class="alert-message success prompt">Thanks for liking the picture!</div>');
          likeLink.replaceWith('<span class="liked">' + (parseInt(likeLink.html())+1) + '</span>');
          removeAlerts();
        });

        return false;
    });

  }

    // Fade in login prompt
    $('.ideas-index .login-prompt').hide().delay(1200).fadeIn(1000);
    $('.alert-message.error, .alert-message.warning, .alert-message.success').delay(2000).slideUp('slow');

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