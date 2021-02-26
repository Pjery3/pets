$(function(){
    $('.header-pagination__list li a').on('click', function(event){
        $('.header-pagination__list li a.active').removeClass('active');
        event.target.classList.add('active');
    })

    $('.animal-slider__items').slick();

    $('.pages-arrow').on('click',function(){
        $('.pages-dropdown').slideToggle();
    });


    

})