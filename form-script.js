$(document).ready(function(){

    $("#inf-button").click(function(){
        $("#brd-button").css('box-shadow', '0px 0px 0px rgb(80, 152, 177)');
        $("#inf-button").css('box-shadow', '4px 4px 0px rgba(80, 152, 177,0.5)');
        $("#brd-form").slideUp(800);
        $("#inf-form").slideDown(800);
        $("#inf-form-1").slideDown(1000);
    });

    $("#country").change(function() {
        $("#inf-form-2").slideDown(1000);
    });

    var platforms = [];

    $("#checkbox-ins").change(function() {
        $("#inf-form-3").slideDown(800);
        $("#inf-form-3-ins").slideToggle(1000);
    });

    $("#checkbox-tt").change(function() {
        $("#inf-form-3").slideDown(800);
        $("#inf-form-3-tt").slideToggle(1000);
    });

    $("#checkbox-yt").change(function() {
        $("#inf-form-3").slideDown(800);
        $("#inf-form-3-yt").slideToggle(1000);
    });

    $("#checkbox-twitch").change(function() {
        $("#inf-form-3").slideDown(800);
        $("#inf-form-3-twitch").slideToggle(1000);
    });


    $("#inf-form-submit").click(function() {
        $("#inf-form").slideUp(500);
        $("#form-open-message").slideUp(300);
        $("#inf-form-submit-message").slideDown(2000);
    });


    if (!$("input[name='html_elements']:checked").val()) {
    }

    $("#brd-button").click(function(){
        $("#inf-button").css('box-shadow', '0px 0px 0px rgb(80, 152, 177)');
        $("#brd-button").css('box-shadow', '4px 4px 0px rgba(80, 152, 177,0.5)');
        $("#inf-form").slideUp(800);
        $("#brd-form").slideDown(800);
        $("#brd-form-1").slideDown(1000);
    });

});