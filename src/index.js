import './sass/main.scss';
import './../node_modules/slick-carousel/slick/slick.scss';
import './../node_modules/slicknav/scss/slicknav.scss';
import './../node_modules/slicknav/scss/core.scss';
import './../node_modules/slicknav/scss/theme.scss';

import logo from './img/logo.png';

const $ = require('jquery');
const slick = require('slick-carousel');
const slicknav = require('slicknav/jquery.slicknav');
const waypoints = require('././../node_modules/waypoints/lib/jquery.waypoints');

import './timeline';

// MOBILE NAVIGATION
$('.wp-menu').slicknav({
    brand: `<img src='${logo}'/>`,
    label: '',
});

$(document).ready(function () {

    // ACCORDIONS

    $('.accordion-title').click(function (e) {
        var accordionitem = $(this).attr('data-tab');
        $('#' + accordionitem)
            .slideToggle()
            .parent()
            .siblings()
            .find('.accordion-content')
            .slideUp();

        $(this).toggleClass('active-title');
        $('#' + accordionitem)
            .parent()
            .siblings()
            .find('.accordion-title')
            .removeClass('active-title');

        $('i.fa-chevron-down', this).toggleClass('chevron-top');
        $('#' + accordionitem)
            .parent()
            .siblings()
            .find('.accordion-title i.fa-chevron-down')
            .removeClass('chevron-top');
    });


    // SLIDERS

    if (document.querySelector('.portfolio-items')) {
        $('.portfolio-items').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            arrows: false,
            centerMode: false,
            responsive: [{
                    breakpoint: 992,
                    settings: 'unslick',
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '40px',
                    },
                }
            ],
        });
    }

    if (document.querySelector('.history--images')) {
        $('.history--images').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            arrows: false,
            infinite: false,
            responsive: [{
                breakpoint: 992,
                settings: 'unslick',
            }, ],
        });
    }

    // CUSTOM CHECKBOX PAGE KONTAKT = CONTACT FORM 

    if (document.querySelector('.custom-check')) {
        $('span.checkmark').click(function () {

            var checkBoxes = $(".custom-check input[type='checkbox']");
            checkBoxes.prop("checked", !checkBoxes.prop("checked"));



        })
    }


    // MENU SCROLL

    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 100) {
            $(".gazomet-header").addClass("small")
        } else {
            $(".gazomet-header").removeClass("small")
        }
    });

    // NAVBAR SEARCH BOX ON CLICK 

    if (document.querySelector('.navbar-search-box')) {
        $('.search-box a').click(function (e) {
            e.preventDefault();
            $('.navbar-search-box').fadeToggle(300);
        })

        $('.navbar-search-box__close').click(function () {
            $('.navbar-search-box').fadeToggle(300);
        })
    }

    jQuery('.timeline').timeline({
        mode: 'horizontal',
        forceVerticalMode: 600
    });



}); // document.ready