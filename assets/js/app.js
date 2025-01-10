$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".overlay").show();
        $(".header__menu").addClass("open");
        $("html, body").addClass("ovh");
    });
    $(".burger__close").on("click", function() {
        $(".overlay").hide();
        $(".header__menu").removeClass("open");
        $("html, body").removeClass("ovh");
    });
    $(".overlay").on("click", function() {
        $(".overlay").hide();
        $(".header__menu").removeClass("open");
        $("html, body").removeClass("ovh");
    });


    var track = $('.track');
    track.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:10,
        items:3
    });
    track.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            track.trigger('next.owl');
        } else {
            track.trigger('prev.owl');
        }
        e.preventDefault();
    });






});