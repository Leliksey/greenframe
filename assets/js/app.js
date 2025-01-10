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
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },            
            960:{
                items:3
            }
        }
    });
    if ($(window).width() > 767) {
        // Добавляем обработчик события с опцией passive: false
        track.on('mousewheel', '.owl-stage', { passive: false }, function (e) {
            // Определяем направление прокрутки
            if (e.originalEvent.deltaY > 0) {
                track.trigger('next.owl.carousel');
            } else {
                track.trigger('prev.owl.carousel');
            }
            // Предотвращаем стандартное поведение
            e.preventDefault();
        });
    }
    






});