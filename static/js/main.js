'use strict'
var advSwiper, newsSwiper, articleSwiper;

function scrollNav() {
    // if (!$('.navigation').hasClass("burger_active")) {
    if ($(window).scrollTop() >= 50) {
        $("header").addClass('scroll');
    } else {
        $("header").removeClass('scroll');
    }
    // }
}
$(document).ready(function () {
    if ($(".advantages-swiper").length > 0) {
        advSwiper = new Swiper('.advantages-swiper', {
            speed: 400,
            spaceBetween: 30,
            initialSlide: 1,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            autoplay: {
                delay: 3000,
            },
            centeredSlides: true,
            navigation: {
                nextEl: '.advantages-swiper__navigation.white_nav .swiper-button-next',
                prevEl: '.advantages-swiper__navigation.white_nav .swiper-button-prev',
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    initialSlide: 0,
                    slidesPerView: 1,
                    centeredSlides:false,
                    spaceBetween: 15,
                },
                768: {
                    initialSlide: 0,
                    slidesPerView: 3,
                    centeredSlides:false,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 2,
                    centeredSlides:false
                },
                1440: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                }

            }
        });
    }
    if ($(".news-swiper").length > 0) {
        newsSwiper = new Swiper('.news-swiper', {
            speed: 800,
            spaceBetween: 30,
            initialSlide: 1,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.news-swiper__navigation.white_nav .swiper-button-next',
                prevEl: '.news-swiper__navigation.white_nav .swiper-button-prev',
            },
            slidesPerView: 1,
            breakpoints: {
                1279: {}
            }
        });
    }
    if ($(".article-swiper").length > 0) {
        articleSwiper = new Swiper('.article-swiper', {
            speed: 400,
            spaceBetween: 30,
            // initialSlide: 1,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.article-swiper__navigation .swiper-button-next',
                prevEl: '.article-swiper__navigation .swiper-button-prev',
            },
            pagination: {
                el: '.article-slider__box .swiper-pagination',
                type: 'bullets',
            },
            slidesPerView: 1,
            breakpoints: {
                1279: {}
            }
        });
    }
    $(document).on("click", ".pp_", function (e) {
        e.preventDefault();
        var el = $(this);
        var th_pp = el.attr('data-pp');
        $('html,body').addClass('noscroll');
        $('.pp').removeClass('show');
        $('.pp[data-pp="' + th_pp + '"]').addClass('show');
        $('.pp[data-pp="' + th_pp + '"]').trigger('click');
        // $('.pp').removeClass('show');
    });
    $(document).on('click', ".pp__close, .pp__bg, .close_btn", function () {
        $('.pp').removeClass('show');
        $('html,body').removeClass('noscroll');
    });
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode === 27) {
            $('.pp').removeClass('show');
            $('html,body').removeClass('noscroll');
        }
    };
    $("a").click(function (e) {
        if ($(this).attr("href").indexOf("#") !== -1) {
            try {
                let elementClick = $(this).attr("href");
                let destination = $(elementClick).offset().top;
                $('html,body').animate({
                    scrollTop: (destination - 170)
                    // scrollTop: (destination)
                }, 1000);
                return false;
            } catch (e) {}
        }
    });
    $("a.scrolldown").click(function (e) {
        try {
            let elementClick = $(this).attr("href");
            let destination = $(elementClick).offset().top;
            $('html,body').animate({
                // scrollTop: (destination - 90)
                scrollTop: (destination)
            }, 1000);
            return false;
        } catch (e) {}
    });
    $(document).on('click', '.showpass', (function (e) {
        e.preventDefault();
        let el = $(this);
        let input = el.closest(".input-box").find("input");
        let img = el.find("img");
        let src = el.find("img").attr("src");
        if (input.attr("type") === 'password') {
            input.attr("type", "text");
            img.attr("src", src.replace("close-eye", "open-eye"));
        } else {
            input.attr("type", "password");
            img.attr("src", src.replace("open-eye", "close-eye"));
        }
    }));
    $(document).on("click", ".searh ", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            $(this).addClass("active")
            $(".search-box").fadeIn(300);
            setTimeout(() => {
                $(".search-box").find(".input-search").focus();
            }, 350);
        }
    });
    $(document).on("touchstart", ".user__avatar ", function (e) {

        $(".mobile-menu-icon").removeClass("active");
        $(".header__wrapper.inside > .grid").removeClass("active");

        $(this).toggleClass("active");
        $(".header__wrapper.inside .user__menu").toggleClass("active");
        
        
        if($(this).hasClass("active")){
            $('html,body').addClass('noscroll');
        }
        else
        {
            $('html,body').removeClass('noscroll');
        }
    });
    $(document).on("touchstart", ".mobile-menu-icon ", function (e) {
        

        $(".user__avatar").removeClass("active");
        $(".header__wrapper.inside .user__menu").removeClass("active");
        
        $(this).toggleClass("active");
        $(".header__wrapper.inside > .grid").toggleClass("active");

        if($(this).hasClass("active")){
            $('html,body').addClass('noscroll');
        }
        else
        {
            $('html,body').removeClass('noscroll');
        }
    });
    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div = $(".search-box"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //     && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         setTimeout(() => {
    //             $(".search-box").find(".input-search").blur();
    //         }, 0);
    //         $(".search-box").fadeOut(200);
    //         $(".searh").removeClass("active");
    //     }
    // });
    $(document).on("click", ".searh-wrapper__close ", function (e) {
        e.preventDefault();
        setTimeout(() => {
            $(".search-box").find(".input-search").blur();
        }, 0);
        $(".search-box").fadeOut(200);
        $(".searh").removeClass("active");
    });
    $(document).on("click", ".card-faq__title ", function (e) {
        $(this).toggleClass("active");
        $(this).siblings(".card-faq__answer").slideToggle(300);
    });
    // Selects
    $('.select').each(function () {
        $(this).children('select').css('display', 'none');
        var $current = $(this);
        $(this).find('option').each(function (i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/select/g, 'select__box')
                }));
                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/select/g, 'select__placeholder'),
                    text: placeholder,
                    'data-placeholder': placeholder
                }));
                // return;
            }
            $current.children('div').append($('<span>', {
                class: $current.attr('class').replace(/select/g, 'select__box__options'),
                text: $(this).text()
            }));
            $current.find('.select__box__options:first-child').addClass("selected");
        });
    });
    // Toggling the `.active` state on the `.sel`.
    $('.select').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest("section").removeClass("selsection")
        } else {
            $('.select').removeClass('active');
            $(this).addClass('active');
            $(this).closest("section").addClass("selsection")
        }
    });
    // Toggling the `.selected` state on the options.
    $('.select__box__options').click(function () {
        var txt = $(this).text();
        var index = $(this).index();
        $(this).siblings('.select__box__options').removeClass('selected');
        $(this).addClass('selected');
        var $currentSel = $(this).closest('.select');
        $currentSel.children('.select__placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index).trigger('change');
    });
    $(document).mouseup(function (e) {
        var div = $('.select');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.select').removeClass('active');
        }
    });
    scrollNav();

});
$(window).resize(function () {
    if (advSwiper) advSwiper.update();
    if (newsSwiper) newsSwiper.update();
});
$(window).scroll(function () {
    scrollNav();
});

$(document).on('click', '#questions', function() {
    $(document).scrollTop($('footer').offset().top);
});

