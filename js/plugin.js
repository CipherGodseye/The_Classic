/*global $, alert, console*/
$(function () {

    'use strict';

    // Adjust Header Height

    var myHeader = $('.header'),
        mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function () {

        myHeader.height($(window).height());

    });

    // Add Links Active Class

    $('.links li').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Making The BxSlider Center

    mySlider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider div').height()) / 2);

    });

    // Trigger The BxSlider

    mySlider.bxSlider({

        pager: false

    });

    // Smooth Scroll

    $('.links li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

    });

    // Testimonials Silder

    (function autoSlider() {

        $('.t-slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.t-slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();

                });

            }

        });

    }());

    // Trigger MixItUp

    var mixer = mixitup('.gallery');

    // Adjuste Shuffle

    $('.shuffle li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    });


});