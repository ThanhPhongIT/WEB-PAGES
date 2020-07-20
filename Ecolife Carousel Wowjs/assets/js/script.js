$(document).ready(function() {
    $(".slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



    $(".seller__slider").owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
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
    var selector = $('.seller__slider');

    $('.my-next-button').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button').click(function() {
        selector.trigger('prev.owl.carousel');
    });


    $(".popular__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    var selector = $('.popular__slider');

    $('.my-next-button-popular').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button-popular').click(function() {
        selector.trigger('prev.owl.carousel');
    });
    $(".product__slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    var selector = $('.product__slider');

    $('.my-next-button-product').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button-product').click(function() {
        selector.trigger('prev.owl.carousel');
    });
    $(".probottom__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
    var selector = $('.probottom__slider');

    $('.my-next-button-probottom').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button-probottom').click(function() {
        selector.trigger('prev.owl.carousel');
    });
    $(".feature__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
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
    var selector = $('.feature__slider');

    $('.my-next-button-feature').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button-feature').click(function() {
        selector.trigger('prev.owl.carousel');
    });
    $(".logo__slider").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            700: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
})