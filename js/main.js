$(document).ready(function () {
    $("#owl-main").owlCarousel({
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        slideSpeed: 300,
        paginationSpeed: 400,
        dots: true,
        items: 1,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        itemsDesktop: !1,
        itemsDesktopSmall: !1,
        itemsTablet: !1,
        itemsMobile: !1
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 300,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: 0,   
        focusOnSelect: true
    });
    $('#owl-client').owlCarousel({
        items: 2,
        loop: !0,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 15,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.side-nav').click(function () {
        $('header nav').toggleClass('right-0');
        $(this).css('display', 'none');
        $('.overlay').css({
            "opacity": "1",
            "z-index": "1"
        });
        $('.page-title').css({
            "z-index": "0"
        });
        $('.top-header').css({
            "z-index": "0"
        });
        $('.fixed-footer').css({
            "z-index": "0"
        });

    });
    $('.overlay').click(function () {
        $('header nav').toggleClass('right-0');
        $('.side-nav').css('display', 'block');
        $('header .logo').css('display', 'block');
        $(this).css({
            "opacity": "0",
            "z-index": "-1"
        });
        $('.page-title').css({
            "z-index": "9"
        });
        $('.top-header').css({
            "z-index": "2"
        });
        $('.fixed-footer').css({
            "z-index": "99"
        });
    });
    $(".fancybox").fancybox();

});

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
$(window).on('load', function () {
    $("#preloader").fadeOut(2000, function () {
        $("body").fadeIn(1000)
    })
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {
        $(".header-container").addClass("fixed-top-n").fadeIn();
    } else {
        $(".header-container").removeClass("fixed-top-n");
    }
});