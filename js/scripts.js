
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        Boolean:true,
        Number:50,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});