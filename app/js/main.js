$(function () {
    $('.header-navigation__list li a').on('click', function (event) {
        $('.header-navigation__list li a.active').removeClass('active');
        event.target.classList.add('active');
    });

    $('.animal-slider__items').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7500,
        speed: 1000,
    });

    $('.pages-arrow').on('click', function () {
        $('.pages-dropdown').slideToggle();
    });

    $('.clients-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 810,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
    });


    $('.header-navigation__burger').on('click', function () {
        var state = 1
        return function () {
            if (state === 1) {
                state = 2
                $('.header-navigation__list').addClass('active');
            } else if (state === 2) {
                state = 1
                $('.header-navigation__list').removeClass('active');
            }

        }
    }());
    $('.blog-pagination a').on('click', function(e){
        $('.blog-pagination a').removeClass('active');
        e.target.classList.add('active');

    })

    $(function() {
        $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('#back-to-top').fadeIn();
        } else {
        $('#back-to-top').fadeOut();
        }
        });
        $('#back-to-top').on('click',function() {
        $('body,html').animate({scrollTop:0},700);
        });
        });
    // $('.close-menu').on('click', function () {
    //     $('.header-navigation__list').removeClass('active');
    // })



});