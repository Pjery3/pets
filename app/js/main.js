$(function(){
    $('.header-pagination__list li a').on('click', function(event){
        $('.header-pagination__list li a.active').removeClass('active');
        event.target.classList.add('active');
    })

    $('.animal-slider__items').slick();

    $('.pages-arrow').on('click',function(){
        $('.pages-dropdown').slideToggle();
    });

    $('.clients-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 3000,
      });
    

})