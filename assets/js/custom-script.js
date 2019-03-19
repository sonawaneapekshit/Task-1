$(document).ready(function() {

    // Animate on click of downarrow in landing page section of page
    $("a.downarrow").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });

    $(function() {
        var header = $(".navbar");

        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();
        //     if (scroll >= 50) {
        //         header.addClass("bg-dark");
        //     } else {
        //         header.removeClass("bg-dark");
        //     }
        // });

    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        // if (scrollDistance >= 850) {
        //     $('nav').fadeIn("fast");
        // } else {
        //     $('nav').fadeOut("fast");
        // }

        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('nav').removeClass('active');
                $('nav').eq(i).addClass('active');
            }
        });
    }).scroll();

});