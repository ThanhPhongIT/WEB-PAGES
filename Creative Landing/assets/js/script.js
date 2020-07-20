$(document).ready(function() {
    $('.modal a').fancybox();
    $('.modal').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1.5
            },
            600: {
                items: 2.7
            },
            1000: {
                items: 4.7
            }
        }
    })
    $('.adv__item').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

});