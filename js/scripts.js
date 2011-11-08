
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
	$(".slide").slideToggle();
	});

});