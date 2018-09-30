$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        autoplay: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $(".hamb").click(function() {
        $(this).toggleClass("on");
        $(".menu").slideToggle();
        return false;
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".right-menu").addClass("active");
        } else {
         $(".right-menu").removeClass("active");
     }
 });

    if( $(window).width() < 575 ) {
        $("#button-addon2").text("OK");
        $(".section_4 h3").text("Новости стиля");
        $('#tbxEmail').attr('placeholder','Ведите E-mail');
    }

    $(".like").on("click", function () {
        $(this).toggleClass('active');
    });

    $(".top").click(function() {
        $("html, body").animate({ scrollTop: $("#section_2").height()+120 }, "slow");
        return false;
    });


});