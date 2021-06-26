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

});